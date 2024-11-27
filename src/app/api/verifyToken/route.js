import jwt from "jsonwebtoken";

export async function POST(req) {
  const body = await req.json();
  const token = body.token;

  if (!token) {
    return new Response("Token is missing", { status: 400 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return new Response(JSON.stringify(decoded), { status: 200 });
  } catch (error) {
    console.error("Error verifying token:", error);
    return new Response("Invalid token", { status: 401 });
  }
}
