import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req) {
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
    console.log("Token not found.");
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    // Verify the token on the server-side for security
    const url = new URL("/api/verifyToken", req.url);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      console.error("Error verifying token on server:", await response.text());
      return NextResponse.redirect(new URL("/", req.url));
    }

    const user = await response.json();
    req.user = user; // Attach user info to the request (if valid)
  } catch (err) {
    console.error("Error verifying token:", err);
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Specify the paths to protect
export const config = {
  matcher: ["/dashboard"],
};
