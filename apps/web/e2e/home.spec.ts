import { test, expect } from "@playwright/test";

test("scaffold placeholder home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Innovative Twist Real Estate" })).toBeVisible();
});
