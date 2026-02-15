// @sundayz/types — Shared type definitions for SundayFlow

// ── Sermon ──────────────────────────────────────────────

export interface Sermon {
  id: string;
  churchId: string;
  title: string;
  sourceType: "upload" | "youtube";
  sourceUrl?: string;
  durationSeconds: number;
  createdAt: Date;
}

// ── Transcription ───────────────────────────────────────

export interface WordTimestamp {
  word: string;
  start: number;
  end: number;
}

export interface Transcript {
  sermonId: string;
  text: string;
  words: WordTimestamp[];
}

// ── AI Analysis ─────────────────────────────────────────

export interface SermonAnalysis {
  sermonId: string;
  title: string;
  scriptureReferences: string[];
  mainTheme: string;
  keyPoints: { summary: string; startTime: number; endTime: number }[];
  quotableMoments: { text: string; startTime: number; endTime: number }[];
  suggestedClips: {
    label: string;
    startTime: number;
    endTime: number;
    reason: string;
  }[];
}

// ── Generated Content ───────────────────────────────────

export interface GeneratedContent {
  sermonId: string;
  socialPosts: SocialPost[];
  blogPost: { title: string; body: string };
  emailNewsletter: { subjectLines: string[]; body: string };
  smallGroupGuide: {
    questions: string[];
    leaderNotes: string;
    scriptureReadingPlan: string[];
  };
  devotionalSeries: DailyDevotional[];
  familyQuestions: string[];
}

export interface SocialPost {
  platform: "instagram" | "facebook" | "tiktok" | "twitter";
  type: "quote" | "carousel" | "discussion" | "scripture" | "invite";
  caption: string;
  hashtags: string[];
  suggestedPostTime?: string;
  altText?: string;
}

export interface DailyDevotional {
  day: number;
  title: string;
  scripture: string;
  reflection: string;
  prayer: string;
}

// ── Video Clips ─────────────────────────────────────────

export type AspectRatio = "9:16" | "16:9" | "1:1";

export interface VideoClip {
  sermonId: string;
  label: string;
  startTime: number;
  endTime: number;
  aspectRatio: AspectRatio;
  outputPath: string;
}

// ── Voice Profile ───────────────────────────────────────

export interface VoiceProfile {
  churchId: string;
  vocabularyPreferences: string[];
  sentenceStructure: string;
  theologicalFramework: string;
  illustrationStyle: string;
  tone: string;
  commonPhrases: string[];
  scriptureHandling: string;
  sampleExcerpts: string[];
  updatedAt: Date;
}

// ── Church / Account ────────────────────────────────────

export interface Church {
  id: string;
  name: string;
  denomination?: string;
  plan: "starter" | "growth" | "pro" | "enterprise";
  brandColors?: { primary: string; accent: string };
  youtubeChannelId?: string;
  voiceProfile?: VoiceProfile;
  elevenLabsVoiceId?: string;
  createdAt: Date;
}
