// @sundayz/api — Hono application for SundayFlow's HTTP API.
// Mounted from apps/web's catch-all route handler. Centralizing here
// lets us reuse the same routes from a future worker or standalone service.

import { Hono } from "hono";
import { sermonsRoutes } from "./routes/sermons";

export function createApi(): Hono {
  const app = new Hono().basePath("/api");

  app.get("/health", (c) =>
    c.json({ status: "ok", timestamp: new Date().toISOString() }),
  );

  app.route("/sermons", sermonsRoutes);

  return app;
}
