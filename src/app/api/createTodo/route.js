import db from "../../../../db";

export async function POST(req) {
	const { userId } = await req.json();
	try {
		const result = await db.query(
      "INSERT INTO todos (name, description, done, user_id) VALUES (?, ?, ?, ?)",
      ["first task", "wash the dishes", 0, userId]
    );
		return new Response(
      JSON.stringify({ success: true, createdId: result.insertId }),
      { status: 201 }
    );
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