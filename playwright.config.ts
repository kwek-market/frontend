import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 120000, // Increase the global test timeout (60 seconds)
  use: {
    navigationTimeout: 60000, // Increase page navigation timeout
    baseURL: 'http://localhost:3100', // Replace with your app's local server or staging URL
    headless: true, // Run tests in headless mode
    trace: 'on-first-retry', // Collect trace on the first retry
  },
  testDir: './tests',
  fullyParallel: true, // Run tests in files in parallel
  forbidOnly: !!process.env.CI, // Fail the build if test.only is used
  retries: process.env.CI ? 2 : 0, // Retry failed tests on CI
  workers: process.env.CI ? 1 : undefined, // Disable parallelism on CI
  reporter: [['html']], // Generate an HTML test report

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    /* Test against mobile viewports */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    /* Test against branded browsers */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run start', // Replace with your app's start command
    url: 'http://127.0.0.1:3100', // Replace with your app's URL
    reuseExistingServer: !process.env.CI, // Reuse server if not running on CI
  },
});
