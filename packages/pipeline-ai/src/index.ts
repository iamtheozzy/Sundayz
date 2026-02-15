// @sundayz/pipeline-ai
// Steps 2 & 3: Sermon analysis + content generation via Claude API
//
// Responsibilities:
//   - Analyze transcript → SermonAnalysis (themes, key points, clip suggestions)
//   - Generate all written content using church's VoiceProfile
//   - Uses prompt caching for voice profile efficiency

import type {
  Transcript,
  SermonAnalysis,
  GeneratedContent,
  VoiceProfile,
} from "@sundayz/types";

export async function analyzeSermon(
  _transcript: Transcript,
): Promise<SermonAnalysis> {
  // TODO: implement Claude API call for sermon analysis
  throw new Error("Not implemented");
}

export async function generateContent(
  _transcript: Transcript,
  _analysis: SermonAnalysis,
  _voiceProfile?: VoiceProfile,
): Promise<GeneratedContent> {
  // TODO: implement Claude API call for content generation
  throw new Error("Not implemented");
}
