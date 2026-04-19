// @sundayz/db — Supabase database layer
//
// Responsibilities:
//   - Typed Supabase client factory (service-role, server-side only)
//   - Database type definitions (Database) — regenerate after schema changes via:
//     supabase gen types typescript --project-id <id> > src/database.types.ts
//   - SQL migrations live in migrations/
//   - RLS policies live in policies/

import { createClient } from "@supabase/supabase-js";

// TODO: replace with generated types from 'supabase gen types typescript'
export type Database = { /* TODO: generate via 'supabase gen types typescript --project-id <id> > src/database.types.ts' after schema changes */ };

export function createServiceClient() {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}
