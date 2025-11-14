import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

if (!process.env.SPOON_API_KEY) {
  throw new Error("SPOON_API_KEY not loaded");
}

console.log("Loaded test API key:", process.env.SPOON_API_KEY);
