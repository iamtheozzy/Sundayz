// @sundayz/pipeline-orchestrator — Coordinates the 5-step sermon pipeline
//
// Responsibilities:
//   - Sequence and persist state across all pipeline steps
//   - Handle retries and surface errors per step
//
// Step ownership:
//   1. Transcription  → @sundayz/pipeline-transcription  (FFmpeg + Whisper)
//   2. Analysis       → @sundayz/pipeline-ai             (Claude: sermon analysis)
//   3. Generation     → @sundayz/pipeline-ai             (Claude: content generation)
//   4. Video clips    → @sundayz/pipeline-video          (Remotion render)
//   5. Audio devos    → @sundayz/pipeline-voice          (ElevenLabs voice clone)

export type PipelineStatus =
  | "pending"
  | "transcribing"
  | "analyzing"
  | "generating"
  | "rendering"
  | "voicing"
  | "complete"
  | "failed";

export interface PipelineState {
  sermonId: string;
  status: PipelineStatus;
  currentStep?: string;
  error?: string;
  artifacts: {
    transcriptId?: string;
    analysisId?: string;
    contentId?: string;
    clipIds?: string[];
    audioIds?: string[];
  };
}

export async function processSermon(_sermonId: string): Promise<PipelineState> {
  throw new Error("Not implemented");
}

export async function getPipelineState(
  _sermonId: string,
): Promise<PipelineState> {
  throw new Error("Not implemented");
}
