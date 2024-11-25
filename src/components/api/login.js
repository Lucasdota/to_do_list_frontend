// pages/api/login.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Call your external API
    const response = await fetch(`http://localhost:8080/users`, {
      method: "POST", // Assuming you're sending a POST request
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Check if the response is OK
    if (response.ok) {
      const data = await response.json();

      // Set a cookie if needed
      res.setHeader(
        "Set-Cookie",
        "authToken=your-token-value; HttpOnly; Path=/; Max-Age=3600;"
      );

      // Respond with the data from the external API
      res.status(200).json(data);
    } else {
      // Forward the error response
      const errorData = await response.json();
	  console.log("Test");
      res
        .status(response.status)
        .json({ success: false, message: errorData.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
