// Remotion composition for sermon video clips
// Renders a video clip with animated word-by-word captions and church branding

import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import type { WordTimestamp } from "@sundayz/types";

export interface SermonClipProps extends Record<string, unknown> {
  words: WordTimestamp[];
  brandColors: { primary: string; accent: string };
  churchName?: string;
}

export const SermonClip: React.FC<SermonClipProps> = ({
  words,
  brandColors,
  churchName,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = frame / fps;

  // Find the current word based on timestamp
  const currentWordIndex = words.findIndex(
    (w) => currentTime >= w.start && currentTime <= w.end,
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 40,
      }}
    >
      {/* Caption area */}
      <div
        style={{
          marginBottom: 120,
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        {/* TODO: Render a window of words around the current word */}
        {/* Highlight the active word in brandColors.accent */}
        {/* Fade in/out words as they enter/leave the window */}
        {currentWordIndex >= 0 && (
          <span
            style={{
              color: brandColors.accent,
              fontSize: 48,
              fontWeight: "bold",
            }}
          >
            {words[currentWordIndex].word}
          </span>
        )}
      </div>

      {/* Church branding */}
      {churchName && (
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: brandColors.primary,
            fontSize: 18,
            opacity: 0.7,
          }}
        >
          {churchName}
        </div>
      )}
    </AbsoluteFill>
  );
};
