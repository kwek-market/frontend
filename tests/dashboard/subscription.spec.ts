import { test, expect, Page } from '@playwright/test';

test.describe.skip('Subscription Tests', () => {
  const baseURL = 'http://localhost:3100';
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
  });

  test('Email subscription with valid email', async ({ page }) => {
    // Locate elements
    const subscriptionText = page.locator('text=NEW TO KWEKMARKET? Subscribe to our newsletter to get updates on our latest offer');
    const emailInput = page.locator('input[placeholder="Enter your email address..."]');
    const subscribeButton = page.locator('button:has-text("Subscribe")');
    const successMessage = page.locator('text=Subscription Successful');
  
    // Ensure the subscription prompt is visible before interaction
    await expect(subscriptionText).toBeVisible();
  
    // Enter a valid email and click subscribe
    await emailInput.fill('valid@example.com');
    await subscribeButton.click();
  
    // Assert the success message is visible
    await expect(successMessage).toBeVisible({ timeout: 10000 }); // Adjust timeout as needed
  });


  test('Email subscripion with valid email', async ({ page }) => {
    // Locate elements
    const emailInput = page.locator('input[placeholder="Enter your email address..."]');
    const subscribeButton = page.locator('button:has-text("Subscribe")');
    const successMessage = page.locator('text=Subscription Successful');
  
    // Enter a valid email and click subscribe
    await emailInput.fill('valid@example.com');
    await subscribeButton.click();
  
    // Assert the success message is visible
    await expect(successMessage).toBeVisible({ timeout: 10000 }); // Adjust timeout as needed
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
