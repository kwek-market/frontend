import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 300000, // Global timeout for each test (5 minutes)

testDir: './tests', // Directory containing test files

fullyParallel: true, // Run tests in parallel

forbidOnly: !!process.env.CI, // Fail the build if `test.only` is present in CI

retries: process.env.CI ? 2 : 0, // Retry failed tests twice on CI, no retries locally

workers: process.env.CI ? 4 : undefined, // Limit workers to 4 in CI for better performance

reporter: [
  ['html', { open: 'always' }], // Generate HTML reports that automatically open
],
  use: {
    baseURL: 'https://www.kwekmarket.com/', // Base URL for relative navigation
    headless: true, // Run tests in headless mode (no GUI)
    trace: 'on-first-retry', // Collect trace for debugging on first retry
    screenshot: 'only-on-failure', // Take screenshots for failed tests
    video: 'retain-on-failure', // Retain video recordings for failed tests (optional)
    actionTimeout: 700000, // Set a timeout for actions like clicks (70s)
    navigationTimeout: 900000, // Set a timeout for page navigation (90s)
  },

  projects: [
    // Desktop Chrome configuration
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Uncomment to enable Firefox testing
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // Uncomment to enable Safari testing
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // Uncomment to test against mobile viewports
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],
});
