// @sundayz/pipeline-video
// Step 4: Video clip extraction via FFmpeg
//
// Responsibilities:
//   - Extract clips at AI-suggested timestamps
//   - Crop to 9:16 (vertical), 16:9 (landscape), 1:1 (square)
//   - Generate ASS subtitles with word-by-word animation from Whisper timestamps
//   - Burn captions in church brand colors
//   - Render 3-5 clips × 3 formats = 9-15 final video files

import type { SermonAnalysis, VideoClip, AspectRatio } from "@sundayz/types";

export async function extractClips(
  _videoPath: string,
  _analysis: SermonAnalysis,
  _aspectRatios: AspectRatio[],
): Promise<VideoClip[]> {
  // TODO: implement FFmpeg clip extraction + caption burning
  throw new Error("Not implemented");
}
