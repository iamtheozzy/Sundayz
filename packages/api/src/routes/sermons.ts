// Sermon pipeline routes — accept uploads/URLs, return processing state.

import { Hono } from "hono";

export const sermonsRoutes = new Hono();

// POST /api/sermons — accept YouTube URL or file upload
sermonsRoutes.post("/", (c) => c.json({ error: "Not implemented" }, 501));

// GET /api/sermons/:id — sermon status and results
sermonsRoutes.get("/:id", (c) => c.json({ error: "Not implemented" }, 501));

// GET /api/sermons/:id/content — generated content
sermonsRoutes.get("/:id/content", (c) =>
  c.json({ error: "Not implemented" }, 501),
);

// GET /api/sermons/:id/clips — video clips
sermonsRoutes.get("/:id/clips", (c) =>
  c.json({ error: "Not implemented" }, 501),
);
