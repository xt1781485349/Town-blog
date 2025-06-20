import { verifyAuth0Token } from "../lib/auth.js";

export async function handler(event, context) {
  try {
    // event 是 Netlify 函数事件对象，Headers 在 event.headers
    // 需要构造一个类似 Request 的对象传给 verifyAuth0Token
    // 这里简单用 event.headers 模拟 Request.headers.get

    const request = {
      headers: {
        get(name) {
          return event.headers[name.toLowerCase()] || "";
        }
      }
    };

    await verifyAuth0Token(request);
  } catch (err) {
    return {
      statusCode: 401,
      body: "Authorization required",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      users: [
        { id: "1", email: "example-user-1@example.com" },
        { id: "2", email: "example-user-2@example.com" },
      ],
    }),
  };
}
