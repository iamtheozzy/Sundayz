// @sundayz/billing — Stripe customer, subscription, and quota logic
//
// Responsibilities:
//   - Create and manage Stripe customers tied to church accounts
//   - Generate Stripe Checkout and Customer Portal sessions
//   - Handle incoming Stripe webhook events
//   - Query per-church sermon usage quota

export async function createStripeCustomer(
  _churchId: string,
  _email: string,
): Promise<string> {
  throw new Error("Not implemented");
}

export async function createCheckoutSession(
  _churchId: string,
  _priceId: string,
): Promise<{ url: string }> {
  throw new Error("Not implemented");
}

export async function createPortalSession(
  _churchId: string,
): Promise<{ url: string }> {
  throw new Error("Not implemented");
}

export async function handleWebhook(
  _payload: string,
  _signature: string,
): Promise<void> {
  throw new Error("Not implemented");
}

export async function getQuotaForChurch(
  _churchId: string,
): Promise<{ used: number; limit: number }> {
  throw new Error("Not implemented");
}
