// Remotion Root — registers all video compositions
// This is the entry point for Remotion Studio and rendering

import { Composition } from "remotion";
import { SermonClip } from "./compositions/SermonClip";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Vertical (9:16) — TikTok, Reels, Shorts */}
      <Composition
        id="SermonClip-9x16"
        component={SermonClip}
        durationInFrames={30 * 60} // placeholder: 60 seconds
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          words: [],
          brandColors: { primary: "#ffffff", accent: "#f59e0b" },
        }}
      />

      {/* Landscape (16:9) — YouTube, Facebook */}
      <Composition
        id="SermonClip-16x9"
        component={SermonClip}
        durationInFrames={30 * 60}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          words: [],
          brandColors: { primary: "#ffffff", accent: "#f59e0b" },
        }}
      />

      {/* Square (1:1) — Instagram Feed */}
      <Composition
        id="SermonClip-1x1"
        component={SermonClip}
        durationInFrames={30 * 60}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{
          words: [],
          brandColors: { primary: "#ffffff", accent: "#f59e0b" },
        }}
      />
    </>
  );
};
