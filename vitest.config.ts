import { defineConfig } from "vitest/config";
// import dotenv from "dotenv";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["./test/setup.ts"],
  },
});
