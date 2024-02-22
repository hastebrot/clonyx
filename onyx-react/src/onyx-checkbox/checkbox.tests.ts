import { expect, test } from "@playwright/test";

test.use({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 2,
});

test("checkbox matrix", async ({ page }) => {
  // given:
  await page.goto("#/stories/checkbox-matrix");

  // when/then:
  await expect(page.locator("main")).toHaveScreenshot();
});
