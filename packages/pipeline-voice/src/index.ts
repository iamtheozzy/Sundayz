// @sundayz/pipeline-voice
// Step 5 (Premium): Audio devotionals via ElevenLabs voice cloning
//
// Responsibilities:
//   - Manage pastor voice clones via ElevenLabs API
//   - Generate 5-day audio devotional series in pastor's cloned voice
//   - Optionally mix in background music via FFmpeg
//   - Handle voice consent flow

import type { DailyDevotional } from "@sundayz/types";

export interface AudioDevotional {
  day: number;
  title: string;
  audioPath: string;
  durationSeconds: number;
}

export async function generateAudioDevotionals(
  _devotionals: DailyDevotional[],
  _elevenLabsVoiceId: string,
): Promise<AudioDevotional[]> {
  // TODO: implement ElevenLabs API integration
  throw new Error("Not implemented");
}
