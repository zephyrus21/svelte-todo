import type { Request } from "@sveltejs/kit";

let todos: Todo[] = [];

export const api = (req: Request, data?: Record<string, unknown>) => {
  let body = {};
  let status = 500;

  switch (req.method.toLowerCase()) {
    case "get":
      body = todos;
      status = 200;
      break;

    case "post":
      todos.push(data as Todo);
      body = todos;
      status = 201;
      break;

    case "delete":
      todos = todos.filter((t) => t.uid !== req.params.uid);
      status = 200;
      break;

    case "patch":
      todos = todos.map((t) => {
        if (t.uid === req.params.uid)
          if (data.text) t.text = data.text as string;
          else t.done = data.done as boolean;
        return t;
      });
      status = 200;
      break;

    default:
      break;
  }

  if (
    req.method.toLowerCase() !== "get" &&
    req.headers.accept !== "application/json"
  ) {
    return {
      status: 303,
      headers: {
        location: "/",
      },
    };
  }

  return {
    status,
    body,
  };
};
