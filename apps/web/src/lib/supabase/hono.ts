// Hono middleware for Supabase Auth in API routes
// Validates the session and attaches user to the Hono context

import { createMiddleware } from "hono/factory";
import { createClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";

type AuthEnv = {
  Variables: {
    user: User;
    supabase: ReturnType<typeof createClient>;
  };
};

// Middleware that requires authentication
export const requireAuth = createMiddleware<AuthEnv>(async (c, next) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return c.json({ error: "Missing authorization header" }, 401);
  }

  const token = authHeader.slice(7);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { global: { headers: { Authorization: `Bearer ${token}` } } },
  );

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return c.json({ error: "Invalid or expired token" }, 401);
  }

  c.set("user", user);
  c.set("supabase", supabase);
  await next();
});
