import db from "../../../../db";
import jwt from "jsonwebtoken";

export async function DELETE(req) {
  let token = req.cookies.token;

  if (!token) {
    const cookieHeader = req.headers.get("cookie");
    if (cookieHeader) {
      const tokenRegex = /token=([^;]+)/;
      const match = cookieHeader.match(tokenRegex);
      if (match) {
        token = match[1];
      }
    }
  }

  if (!token) {
    return new Response(JSON.stringify({ message: "No token provided" }), {
      status: 401,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    await deleteUserWithTodos(userId);

    const response = new Response(
      JSON.stringify({ message: "User and todos deleted successfully" }),
      { status: 200 }
    );

    response.headers.append(
      "Set-Cookie",
      "token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict"
    );
    return response;
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

const deleteAllTodosFromUser = async (user_id, connection) => {
  await connection.query("DELETE FROM todos WHERE user_id = ?", [user_id]);
};

const deleteUser = async (user_id, connection) => {
  await connection.query("DELETE FROM users WHERE id = ?", [user_id]);
};

const deleteUserWithTodos = async (user_id) => {
  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();
    await deleteAllTodosFromUser(user_id, connection);
    await deleteUser(user_id, connection);
    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error; // rethrow the error to handle it in the calling function
  } finally {
    connection.release(); // always release the connection back to the pool
  }
};
