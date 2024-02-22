import { expect, test } from "@playwright/test";

test.use({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 2,
});

test("button matrix", async ({ page }) => {
  // given:
  await page.goto("#/stories/button-matrix");

  // when/then:
  await expect(page.locator("main")).toHaveScreenshot();
});
