export async function POST() {
  // Clear the cookie by setting it to an empty value and an expiration date in the past
  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    "token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict"
  );

  // Return a response indicating successful logout
  return new Response(JSON.stringify({ message: "Logged out successfully" }), {
    status: 200,
    headers: {
      ...Object.fromEntries(headers), // Spread the headers
      "Content-Type": "application/json",
    },
  });
}