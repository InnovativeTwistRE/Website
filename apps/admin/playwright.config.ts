import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  webServer: {
    command: "pnpm dev",
    port: 3001,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:3001",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
