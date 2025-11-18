import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ["./test/setup.ts"],
    coverage: {
      enabled: true,
      provider: 'v8',
      exclude: ['node_modules', 'dist', 'client/src/assets'],
    },
  },
});
