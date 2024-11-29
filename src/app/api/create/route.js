import db from "../../../../db";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// CREATE ACCOUNT ROUTE
export async function POST(req) {
	try {
    // query the db to check if user already exists
    const { email, password } = await req.json();
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    const user = rows[0];
    if (user) {
      return new Response(
        JSON.stringify({ error: "An account already exists with this email." }),
        { status: 401 }
      );
    }
    // hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    // create user in the db
    const [result] = await db.query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashedPassword]
    );
    // generate jwt
    const token = jwt.sign(
      { userId: result.insertId },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    // set token in a cookie
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      `token=${token}; Path=/; HttpOnly; Max-Age=25920000` // 30 days
    );
    return new Response(
      JSON.stringify({ message: "Account created successfully." }),
      { status: 201, headers }
    );
  } catch (error) {
		console.error("Database query error:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
    });
	}
}

// handle unsupported request methods
export async function OPTIONS() {
  return new Response(null, { status: 200 }); // Respond to OPTIONS requests
}