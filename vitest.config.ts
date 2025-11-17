import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';

// import dotenv from "dotenv";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ["./test/setup.ts"],
    coverage:{
      enabled: true,
      provider:'v8'
    }
  },
});
