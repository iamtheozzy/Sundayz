// Hono catch-all API route handler
// All API routes are defined here using Hono's router
// See: https://hono.dev/docs/getting-started/nextjs

import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

// ── Health check ─────────────────────────────────────────
app.get("/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── Sermon pipeline routes ───────────────────────────────
// TODO: POST /api/sermons — Accept YouTube URL or file upload
// TODO: GET /api/sermons/:id — Get sermon status and results
// TODO: GET /api/sermons/:id/content — Get generated content
// TODO: GET /api/sermons/:id/clips — Get video clips

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
