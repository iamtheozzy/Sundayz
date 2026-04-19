// @sundayz/jobs — Provider-agnostic job-queue interface
//
// Responsibilities:
//   - Define typed job names and payloads for the sermon pipeline
//   - Provide a JobQueue interface that any backing provider can implement
//   - Backing provider is TBD; candidate options:
//       - Trigger.dev  (event-driven, built for long-running background jobs)
//       - Inngest      (serverless-friendly, dev-mode UI)
//       - Supabase Queues (native to our infra, simpler ops)

export type JobName =
  | "process-sermon"
  | "render-clip"
  | "generate-audio-devotional";

export type JobPayload<T extends JobName> = T extends "process-sermon"
  ? { sermonId: string }
  : T extends "render-clip"
    ? { sermonId: string; clipIndex: number }
    : T extends "generate-audio-devotional"
      ? { sermonId: string; day: number }
      : never;

export type JobHandler<T extends JobName> = (
  payload: JobPayload<T>,
) => Promise<void>;

export interface JobQueue {
  enqueue<T extends JobName>(name: T, payload: JobPayload<T>): Promise<void>;
  process<T extends JobName>(name: T, handler: JobHandler<T>): void;
}

export async function enqueue<T extends JobName>(
  _name: T,
  _payload: JobPayload<T>,
): Promise<void> {
  throw new Error(
    "Not implemented — pick a queue provider (Trigger.dev / Inngest / Supabase Queues)",
  );
}
