import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.token;
	console.log(token);
	
  // Check if the token exists
  if (!token) {
		console.log("Token doesn't exists!");		
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    // Verify the token
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user; // Attach user info to the request
  } catch (err) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next(); // Continue to the requested page
}

// Specify the paths to protect
export const config = {
  matcher: ["/dashboard"],
};
