// Auth callback route — handles OAuth redirects, magic links, and email confirmations
// Supabase redirects here after the user confirms their email or signs in via OAuth

import { NextResponse } from "next/server";
import { createClient as createServerClient } from "@sundayz/auth/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Auth code exchange failed — redirect to login with error
  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
