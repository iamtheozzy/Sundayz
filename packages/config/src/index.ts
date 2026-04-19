// @sundayz/config — Centralized environment-variable validation
//
// Responsibilities:
//   - Parse and validate all required/optional env vars via Zod at startup
//   - Fail fast with a descriptive error if required vars are missing
//   - Export PLAN_LIMITS for quota enforcement across the codebase

import { z } from "zod";

const envSchema = z.object({
  SUPABASE_URL: z.string(),
  SUPABASE_ANON_KEY: z.string(),
  SUPABASE_SERVICE_ROLE_KEY: z.string(),
  ANTHROPIC_API_KEY: z.string(),
  OPENAI_API_KEY: z.string(),
  ELEVENLABS_API_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
});

export const env = envSchema.parse(process.env);

export const PLAN_LIMITS = {
  starter: { sermonsPerMonth: 4 },
  growth: { sermonsPerMonth: 8 },
  pro: { sermonsPerMonth: 20 },
  enterprise: { sermonsPerMonth: Infinity },
} as const;
