import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const del: RequestHandler = (req) => api(req);
export const patch: RequestHandler<{}, FormData> = (req) =>
  api(req, {
    text: req.body.get("text"),
  });
