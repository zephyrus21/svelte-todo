import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const get: RequestHandler = (req) => api(req);

export const post: RequestHandler<{}, FormData> = (req) =>
  api(req, {
    uid: `${Date.now()}`,
    created_at: new Date(),
    text: req.body.get("text"),
    done: false,
  });
