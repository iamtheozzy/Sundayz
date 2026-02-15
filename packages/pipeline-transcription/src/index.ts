// @sundayz/pipeline-transcription
// Step 1: Audio extraction (FFmpeg) + Whisper transcription with word-level timestamps
//
// Responsibilities:
//   - Extract audio from video file via FFmpeg
//   - Send audio to OpenAI Whisper API (or GPT-4o Mini Transcribe)
//   - Return Transcript with word-level timestamps
//   - Handle YouTube URL download via yt-dlp

import type { Transcript } from "@sundayz/types";

export async function transcribeSermon(
  _audioPath: string,
): Promise<Transcript> {
  // TODO: implement
  throw new Error("Not implemented");
}
