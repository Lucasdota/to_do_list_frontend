import jwt from "jsonwebtoken";
import db from "../../../../db";

export async function GET(req) {
	let token = req.cookies.token;

	// Check cookies first, then fall back to headers
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
		return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 })
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const userId = decoded.userId;
		const [rowsUser] = await db.query("SELECT * FROM users WHERE id = ?", userId);
		const user = rowsUser[0];
		const [rowsTodos] = await db.query("SELECT * FROM todos WHERE user_id = ?", userId);
		const todos = rowsTodos;
		return new Response(JSON.stringify({ user, todos }), { status: 200})
	} catch (err) {
		return new Response(JSON.stringify({ error: "Invalid token" }) , { status: 401 })
	}
}