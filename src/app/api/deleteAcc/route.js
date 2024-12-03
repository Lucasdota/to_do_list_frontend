import db from "../../../../db";
import jwt from "jsonwebtoken";

const deleteAllTodosFromUser = (user_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM todos WHERE user_id = ?",
      [user_id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      }
    );
  });
};

const deleteUser = (user_id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM users WHERE id = ?", [user_id], (error, results) => {
      if (error) {
        return reject(error);
      }
      const headers = new Headers();
      headers.append(
        "Set-Cookie",
        "token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict"
      );
      resolve(results);
    });
  });
};

export async function DELETE(req) {
  let token = req.cookies.token;

  if (!token) {
    console.log("Token not found in cookies. Trying header.");
    const cookieHeader = req.headers.get("cookie");
    if (cookieHeader) {
      const tokenRegex = /token=([^;]+)/;
      const match = cookieHeader.match(tokenRegex);
      if (match) {
        token = match[1];
        console.log("Token extracted from header:", token);
      }
    }
  }

  if (!token) {
    return new Response(JSON.stringify({ message: "No token provided" }), {
      status: 401,
    });
  }

  console.log("Token: " + token);

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId; // Ensure this matches the property in your JWT payload

    await deleteAllTodosFromUser(userId);
    await deleteUser(userId);

    return new Response(
      JSON.stringify({ message: "User and todos deleted successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        message: "Error processing request",
        error: err.message,
      }),
      { status: 500 }
    );
  }
}
