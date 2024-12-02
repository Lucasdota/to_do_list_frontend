import db from "../../../../db";

export async function PUT(req) {
  const { status, todoId } = await req.json();
	const convertedStatus = status === 0 ? 1 : 0;
  try {
    await db.query("UPDATE todos SET done = ? WHERE id = ?", [
      convertedStatus,
      todoId,
    ]);
    return new Response(null, { status: 204 });
  } catch (err) {
    console.error("Database error:", err);
    return new Response(
      JSON.stringify({ error: "Database operation failed" }),
      {
        status: 500,
      }
    );
  }
}
