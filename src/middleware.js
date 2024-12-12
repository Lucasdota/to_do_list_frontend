// middleware.ts
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  let token = req.cookies.JWT;
  if (!token) {
    console.log("Token not found in cookies. Trying header.");
    const cookieHeader = req.headers.get("cookie");
    if (cookieHeader) {
      const tokenRegex = /JWT=([^;]+)/;
      const match = cookieHeader.match(tokenRegex);
      if (match) {
        token = match[1];
        console.log("Token extracted from header:", token);
      }
    }
  }

  if (pathname === "/" || pathname === "/create-account") {
    if (token) {
      console.log("Token found. Redirecting to dashboard.");
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  if (pathname === "/dashboard") {
    if (!token) {
      console.log("No token found. Redirecting to login.");
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

// paths to protect
export const config = {
  matcher: ["/dashboard"],
};
