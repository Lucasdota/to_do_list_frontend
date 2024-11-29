import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from "../../../../db";

// LOGIN ROUTE
export async function POST(req) {
  try {
    const { email, password } = await req.json(); // Parse the JSON body
    // find the user in your database
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);	
    const user = rows[0];
    // check if user exists
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password." }),
        { status: 401 }
      );
    }
		// compare the plaintext password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return new Response(
        JSON.stringify({ error: "Invalid email or password." }),
        { status: 401 }
      );
		}
    // generate a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    // set the token in a cookie
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      `token=${token}; Path=/; HttpOnly; Max-Age=2592000`
    ); // 30 days
    return new Response(JSON.stringify({ message: "Logged in successfully." }), {
      status: 200,
      headers,
    });
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
