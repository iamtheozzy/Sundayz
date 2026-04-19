# SundayFlow

> Upload your sermon. Get a week of content. Ten minutes.

## What This Is

SundayFlow turns a Sunday sermon into a full week of content: social media clips, posts, blog content, email newsletters, discussion guides, devotionals, and audio devotionals — automatically. Target market is the 300,000+ churches in the US.

## Monorepo Structure

This is a Turborepo monorepo managed with npm workspaces. One Next.js app contains everything (marketing + auth + dashboard) via App Router route groups; everything reusable lives in `packages/`.

```
apps/
  web/          → Next.js 16 (React 19, App Router). One deploy serves both marketing and the app.
                  src/app/
                    (marketing)/     → Public surface: landing, pricing, free demo, waitlist
                    (auth)/          → login, signup (URLs unchanged — route groups don't affect paths)
                    (app)/           → Authenticated surface: dashboard, sermon upload, content review
                    auth/            → OAuth callback (/auth/callback) + server actions (signOut)
                    api/[[...route]] → Thin handle() wrapper that mounts @sundayz/api's Hono app
                    layout.tsx       → Root layout
                    globals.css

packages/
  # Data & contracts
  types/                    → Shared TypeScript interfaces (Sermon, Transcript, SermonAnalysis, GeneratedContent, VideoClip, VoiceProfile, Church)
  db/                       → Supabase schema, migrations/, policies/ (RLS), generated Database types
  config/                   → Zod-validated env vars + PLAN_LIMITS quota constants

  # Platform
  auth/                     → Supabase auth helpers (browser/server/middleware/Hono) — used by apps/web
  api/                      → Hono app definition + route modules. Mounted by apps/web's catch-all
  ui/                       → Shared React UI components (Tailwind v4 + shadcn/ui)
  emails/                   → Transactional emails — React Email templates sent via Resend

  # Business logic
  billing/                  → Stripe customers, subscriptions, checkout, portal, webhooks, quota
  jobs/                     → Provider-agnostic job queue interface (provider TBD: Trigger.dev / Inngest / Supabase Queues)

  # Pipeline (the core product)
  pipeline-transcription/   → Step 1: Audio extraction (FFmpeg) + Whisper transcription with word-level timestamps
  pipeline-ai/              → Steps 2-3: Sermon analysis + content generation via Claude API
  pipeline-video/           → Step 4: Video clip rendering via Remotion
  pipeline-voice/           → Step 5 (Premium): Audio devotionals via ElevenLabs voice cloning
  pipeline-orchestrator/    → Coordinates the 5 steps, persists PipelineState, handles retries

  # Tooling
  tsconfig/                 → Shared TypeScript configs (base.json, nextjs.json)
  eslint-config/            → Shared ESLint flat config (presets WIP)
```

### Why a single Next app instead of separate marketing + dashboard apps?

Lower ops surface for a solo founder. Route groups give clean separation in the codebase without the cost of a second deploy. If marketing iteration speed becomes a bottleneck, `(marketing)/` lifts cleanly into its own `apps/marketing` later.

## Content Generation Pipeline

The core product is a 5-step pipeline that processes a sermon:

1. **Transcription** (`pipeline-transcription`): Extract audio from video via FFmpeg, transcribe via OpenAI Whisper with word-level timestamps
2. **Analysis** (`pipeline-ai`): Send full transcript to Claude → get sermon title, scripture refs, key points, quotable moments, suggested clip timestamps
3. **Content Generation** (`pipeline-ai`): Using analysis + church voice profile → generate social posts, blog post, email newsletter, small group guide, 5-day devotional, family questions
4. **Video Clips** (`pipeline-video`): Render 3-5 clips at AI-suggested timestamps using Remotion React compositions in 9:16 / 16:9 / 1:1 with animated word-by-word captions in brand colors
5. **Audio Devotionals** (`pipeline-voice`, premium): Generate 5-day devotional audio in pastor's cloned voice via ElevenLabs

## Key Technical Decisions

- **AI**: Claude API (Sonnet) for analysis + content generation. Voice profile stored as JSON in system prompt with prompt caching.
- **Transcription**: OpenAI Whisper API for word-level timestamps (critical for caption sync)
- **Video**: Remotion (React-based programmatic video framework) for clip rendering with animated captions. FFmpeg still used for initial audio extraction from sermon uploads. Remotion bundles its own FFmpeg for rendering.
- **Voice Cloning**: ElevenLabs API for pastor voice replication (requires explicit consent)
- **YouTube Integration**: yt-dlp for download, YouTube Data API for channel polling
- **API Layer**: Hono framework inside Next.js catch-all route (`app/api/[...route]/route.ts`). Provides type-safe, fast API routing with middleware support. Can be split into a standalone service later if needed.
- **Backend Platform**: Supabase (Postgres database + Auth + S3-compatible file storage + Realtime). Single platform for data, auth, and sermon/clip file storage.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16 (React 19, App Router) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| API | Hono (inside Next.js catch-all route) |
| Database | Supabase (Postgres) |
| Auth | Supabase Auth |
| File Storage | Supabase Storage (sermon uploads + generated clips) |
| Video Rendering | Remotion (React compositions → MP4) |
| AI | Claude API (Sonnet) via @anthropic-ai/sdk |
| Transcription | OpenAI Whisper API |
| Voice Cloning | ElevenLabs API |
| Payments | Stripe |
| Email | Resend |

## Voice Moat

The competitive advantage is dual voice learning:
- **Writing voice**: AI style profile built from sermon transcripts + edit feedback. After 5-10 sermons, output sounds like the pastor.
- **Literal voice**: ElevenLabs clone from sermon audio. Creates audio content in the pastor's voice.

Both create compounding switching costs — the longer a church uses SundayFlow, the harder it is to leave.

## Commands

```bash
pnpm install      # Install workspace dependencies
pnpm dev          # Start all apps in dev mode
pnpm build        # Build all packages and apps
pnpm lint         # Lint all packages
pnpm test         # Run all tests
pnpm format       # Format with Prettier
```

Package manager is **pnpm** (workspaces declared in `pnpm-workspace.yaml`). Workspace deps reference each other via `workspace:*`.

## Prototype Scope

The prototype goal is: paste a YouTube URL → get a week of content. Minimal UI, no accounts, no payments. Just prove the pipeline works with real sermons.

## Pricing Tiers

| Tier | Price | Sermons/mo |
|------|-------|-----------|
| Starter | $29/mo | 4 |
| Growth | $49/mo | 8 (+ voice learning, audio devotionals) |
| Church Pro | $89/mo | 20 (+ archive mining, team accounts, social publishing) |

## Cost Per Sermon

~$0.60-$0.85 standard, ~$1.85-$2.10 with audio devotionals. Video rendering via Remotion adds ~$0.05/sermon (5 clips). Margins are 66-88%.
