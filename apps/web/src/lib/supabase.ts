// Supabase client initialization
// Used for database, auth, and file storage

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Browser client (for use in Client Components)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server client (for use in Server Components, API routes, Server Actions)
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}
