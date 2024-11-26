const crypto = require("crypto");
const fs = require("fs");
require("dotenv").config(); // Load environment variables from .env file

// Generate a random secret
const secret = crypto.randomBytes(32).toString("hex");

// Store the secret in a .env.local file
fs.appendFileSync(".env.local", `JWT_SECRET=${secret}\n`, (err) => {
  if (err) throw err;
});

console.log("JWT secret generated and stored in .env file:", secret);
