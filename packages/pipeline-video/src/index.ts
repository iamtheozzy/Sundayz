// @sundayz/pipeline-video
// Step 4: Video clip rendering via Remotion
//
// Responsibilities:
//   - Render clips at AI-suggested timestamps using Remotion React compositions
//   - Support 9:16 (vertical), 16:9 (landscape), 1:1 (square) aspect ratios
//   - Animate word-by-word captions synced to Whisper timestamps
//   - Apply church brand colors, fonts, and logo overlays
//   - Render 3-5 clips × 3 formats = 9-15 final video files
//
// Architecture:
//   - compositions/ — React components that define each video format
//   - components/  — Reusable pieces (captions, branding, logos)
//   - render.ts    — Remotion bundle + render API calls

import type {
  SermonAnalysis,
  VideoClip,
  AspectRatio,
  Church,
} from "@sundayz/types";

export interface RenderOptions {
  videoPath: string;
  analysis: SermonAnalysis;
  aspectRatios: AspectRatio[];
  church?: Church;
  outputDir: string;
}

export async function renderClips(
  _options: RenderOptions,
): Promise<VideoClip[]> {
  // TODO: implement Remotion composition bundling + rendering
  // 1. Bundle the Remotion compositions
  // 2. For each suggested clip × aspect ratio:
  //    a. Pass clip timestamps, transcript words, and brand props
  //    b. Render via @remotion/renderer
  // 3. Return array of rendered VideoClip metadata
  throw new Error("Not implemented");
}
