import { test, expect, Page } from '@playwright/test';

test.describe.skip('Subscription Tests', () => {
  const baseURL = 'http://localhost:3100';
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
  });

  test('Email subscription with valid email', async () => {
    const emailInput = page.locator('input[placeholder="Enter your email address..."]');
    const subscribeButton = page.locator('button:has-text("Subscribe")');

    await emailInput.fill('valid@example.com');
    await subscribeButton.click();

    const successMessage = page.locator('text=Subscription Successful');
    await expect(successMessage).toBeVisible();
  });

  test('Email subscription with empty input', async () => {
    const subscribeButton = page.locator('button:has-text("Subscribe")');
    await subscribeButton.click();

    const errorMessage = page.locator('text=Please enter a valid email address');
    await expect(errorMessage).toBeVisible();
  });

  test('Email subscription with invalid format', async () => {
    const emailInput = page.locator('input[placeholder="Enter your email address..."]');
    const subscribeButton = page.locator('button:has-text("Subscribe")');

    await emailInput.fill('invalid-email');
    await subscribeButton.click();

    const errorMessage = page.locator('text=Please enter a valid email address');
    await expect(errorMessage).toBeVisible();
  });

  test.afterAll(async () => {
    await page.close();
  });
});
