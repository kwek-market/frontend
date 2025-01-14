import { test, expect } from '@playwright/test';


// Helper function to generate a random email
function generateRandomEmail(): string {
  const timestamp = Date.now(); // Use the current timestamp for uniqueness
  return `user${timestamp}@example.com`;
}

test.describe('Newsletter Subscription Tests', () => {
  const usedEmail = 'test@example.com'; // Fixed email for the duplicate subscription test

  test('Subscribe with a new email and validate success message', async ({ page }) => {
    const randomEmail = generateRandomEmail(); // Generate a unique new email

    // Navigate to the target page
    await page.goto('http://localhost:3100');

    // Validate Newsletter Section
    const newsletterInput = page.locator('input[placeholder="Enter your email address..."]');
    const subscribeButton = page.locator('button:has-text("Subscribe")');
    await expect(newsletterInput).toBeVisible();
    await expect(subscribeButton).toBeVisible();

    // Subscribe with a new email
    await newsletterInput.fill(randomEmail);
    await subscribeButton.click();

    // Validate success message
    const successToast = page.locator('text=Subscription Successful');
    await successToast.waitFor({ state: 'visible', timeout: 10000 });
    await expect(successToast).toBeVisible();
  });

  test('Subscribe with an already used email and validate duplicate message', async ({ page }) => {
    // Navigate to the target page
    await page.goto('http://localhost:3100');

    // Validate Newsletter Section
    const newsletterInput = page.locator('input[placeholder="Enter your email address..."]');
    const subscribeButton = page.locator('button:has-text("Subscribe")');
    await expect(newsletterInput).toBeVisible();
    await expect(subscribeButton).toBeVisible();

    // Subscribe with an already used email
    await newsletterInput.fill(usedEmail);
    await subscribeButton.click();

    // Validate duplicate subscription message
    const duplicateToast = page.locator('text=You have already subscribed');
    await duplicateToast.waitFor({ state: 'visible', timeout: 10000 });
    await expect(duplicateToast).toBeVisible();
  });
});