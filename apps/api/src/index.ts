// @sundayz/api — API server
// Orchestrates the sermon-to-content pipeline:
//   1. Accept sermon upload (file or YouTube URL)
//   2. Transcribe via Whisper
//   3. Analyze & generate content via Claude
//   4. Extract video clips via FFmpeg
//   5. (Premium) Generate audio devotionals via ElevenLabs
export {};
