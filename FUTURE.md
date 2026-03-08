# Future Considerations

Ideas and features under consideration for improving unit economics, increasing stickiness, and expanding revenue.

## Premium Features

### B-Roll Library
Churches upload their own footage (baptisms, worship, campus shots, community events). SundayFlow analyzes and tags each clip (indoor/outdoor, worship/community/baptism, mood), then auto-matches B-roll to sermon themes during Remotion clip rendering. Produces professional-feeling videos with contextual B-roll cuts instead of talking-head clips. Tagging is a one-time Claude call (~$0.02/clip); matching is near-zero cost after that.

### Archive Mining
Church connects their YouTube channel. SundayFlow backtracks through 1-2 years of sermons to build a comprehensive voice profile, create a searchable sermon archive (transcripts, themes, scripture index), generate "greatest hits" compilations, and enable cross-referencing ("Pastor mentioned grace 47 times across 12 sermons"). Batch process at off-peak times. Archive itself becomes a switching cost.

### Sermon Series Packaging
Auto-detect multi-week sermon series. Generate series-level content: overview graphics, landing page copy, trailer scripts, series devotional book (PDF/ePub), and cumulative small group curriculum. Zero incremental API cost — synthesizes existing per-sermon analyses.

### Social Publishing & Scheduling
Direct publishing to Instagram, Facebook, TikTok, YouTube, X. Auto-schedule posts across the week (Mon-Sat drip). A/B test captions. Engagement analytics dashboard. Social platform APIs are free — replaces $20-50/mo tools churches already pay for (Later, Buffer, Hootsuite).

### Congregation Engagement Layer
Auto-generate weekly sermon discussion page (shareable link). QR code for bulletins linking to clips, devotional, discussion questions. Anonymous prayer request submission tied to sermon themes. Weekly engagement report for pastors ("42 people read the devotional, 18 submitted prayers"). Pure software — no AI cost. Extremely sticky because congregation starts expecting it weekly.

### Multi-Campus / Multi-Pastor Support
Separate voice profiles per pastor. Campus-specific branding (logos, colors). Consolidated dashboard for comms directors. Team seats with role-based permissions. Same infrastructure, just more rows. Multi-campus churches budget $200-500/mo easily.

## Cost Reduction Ideas

| Optimization | Est. Savings | Effort |
|---|---|---|
| Prompt caching for voice profiles | ~30% on Claude calls | Already planned |
| Whisper batch API instead of real-time | ~50% on transcription | Low |
| Cache sermon analysis, re-generate only content when voice profile improves | ~40% on repeat processing | Medium |
| Tiered video quality — 720p for Starter, 1080p for Pro | ~30% on Remotion render time | Low |

## Pricing Ideas

| Tier | Price | Key Features | Est. Margin |
|---|---|---|---|
| Starter | $29/mo | 4 sermons, basic content, 720p clips | ~90% |
| Growth | $59/mo | 8 sermons, voice learning, series packaging, 1080p, audio devotionals | ~88% |
| Pro | $99/mo | 20 sermons, B-roll library, social publishing, archive mining, engagement pages | ~85% |
| Enterprise | $199-299/mo | Unlimited, multi-campus, multi-pastor, dedicated support | ~80% |

## Key Insight

Every feature that touches the congregation (engagement pages, QR codes, published posts) creates dependency the church can't easily walk away from. B-roll library and social publishing justify price bumps since they replace tools churches already pay for separately.

## OAuth Integration (Auth)

Add Google/Apple OAuth buttons to login/signup pages. The auth callback route already handles code exchange — just needs `supabase.auth.signInWithOAuth({ provider: 'google' })` on the client side.
