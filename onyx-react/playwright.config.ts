/// <reference types="@types/node" />
import { defineConfig, devices } from "@playwright/test";

// See https://playwright.dev/docs/test-configuration.
export default defineConfig({
  fullyParallel: true,
  workers: process.env.CI ? 1 : undefined,
  retries: process.env.CI ? 2 : 0,
  forbidOnly: !!process.env.CI,

  testDir: "./src",
  outputDir: "./.playwright/test-results",
  reporter: [["list"], ["json", { outputFile: "./.playwright/test-results.json" }]],

  use: {
    baseURL: "http://localhost:6020/",
  },
  projects: [
    {
      name: "safari",
      use: {
        ...devices["Desktop Safari"],
        deviceScaleFactor: 2,
      },
    },
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
        deviceScaleFactor: 2,
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        deviceScaleFactor: 2,
      },
    },
  ],

  timeout: 30000, // 30 seconds timeout for each test.
  expect: {
    timeout: 5000, // 5 seconds timeout for each expect.
    toHaveScreenshot: {
      scale: "device",
      maxDiffPixels: 10,
      threshold: 0.05,
    },
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.1,
      threshold: 0.05,
    },
  },
});
