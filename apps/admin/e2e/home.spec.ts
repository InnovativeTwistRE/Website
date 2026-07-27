import { test, expect } from "@playwright/test";

test("scaffold placeholder admin home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Innovative Twist — Admin" })).toBeVisible();
});
