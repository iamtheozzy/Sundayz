import { handle } from "hono/vercel";
import { createApi } from "@sundayz/api";

const app = createApi();

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
