import db from "../../../../db";

export async function DELETE(req) {
  const { todoId } = await req.json();
  try {
    const result = await db.query("DELETE FROM todos WHERE id = ?", [todoId]);
		return new Response(
			JSON.stringify(null,{ status: 204 }
		));
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
