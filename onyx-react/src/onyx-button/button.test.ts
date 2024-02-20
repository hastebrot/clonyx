import { test, expect } from "@playwright/test";

test.use({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 2,
});

test("button matrix", async ({ page }) => {
  // given:
  await page.goto("#/story/button");

  // when/then:
  await expect(page.locator("main")).toHaveScreenshot();
});
