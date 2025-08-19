import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// Add this plugin to stub 'server-only'
function stubServerOnly() {
  return {
    name: "stub-server-only",
    resolveId(id) {
      if (id === "server-only") return id;
    },
    load(id) {
      if (id === "server-only") return "export {}";
    },
  };
}

export default defineConfig({
  plugins: [react(), tsconfigPaths(), stubServerOnly()],
  test: {
    environment: "jsdom",
    setupFiles: [path.resolve(__dirname, "./src/vitest.setup.ts")],
    /* Ignore Playwright tests */
    exclude: ["e2e", "playwright", "node_modules"],
  },
});
