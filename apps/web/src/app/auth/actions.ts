"use server";

import { redirect } from "next/navigation";
import { createClient as createServerClient } from "@sundayz/auth/server";

export async function signOut() {
  const supabase = await createServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}
