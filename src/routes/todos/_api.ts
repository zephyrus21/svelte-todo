import type { Request } from "@sveltejs/kit";

let todos: Todo[] = [];

export const api = (req: Request, todo?: Todo) => {
  let body = {};
  let status = 500;

  switch (req.method.toLowerCase()) {
    case "get":
      body = todos;
      status = 200;
      break;

    case "post":
      todos.push(todo);
      body = todo;
      status = 201;
      break;

    case "delete":
      todos = todos.filter((t) => t.uid !== req.params.uid);
      status = 200;
      break;

    default:
      break;
  }

  if (req.method.toLowerCase() !== "get") {
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
