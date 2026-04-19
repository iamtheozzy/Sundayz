// @sundayz/emails — Transactional email sending via Resend
//
// Responsibilities:
//   - Send welcome, sermon-ready, and usage-warning emails
//   - React Email templates live in src/templates/
//   - Uses Resend API for delivery

export async function sendWelcomeEmail(_params: {
  to: string;
  churchName: string;
}): Promise<void> {
  throw new Error("Not implemented");
}

export async function sendSermonReadyEmail(_params: {
  to: string;
  sermonTitle: string;
  dashboardUrl: string;
}): Promise<void> {
  throw new Error("Not implemented");
}

export async function sendUsageWarningEmail(_params: {
  to: string;
  used: number;
  limit: number;
}): Promise<void> {
  throw new Error("Not implemented");
}
