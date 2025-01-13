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


test.describe.skip('Footer Links Test', () => {
  test('Validate Kwek Links', async ({ page }) => {
    await page.goto('http://localhost:3100');

    const kwekLinks = ['About Us', 'Contact Us', 'Terms of Service'];
    for (const linkText of kwekLinks) {
      const linkLocator = page.locator(`a:has-text("${linkText}")`);
      await expect(linkLocator).toBeVisible();
      await linkLocator.click();
      await page.goBack();
    }
  });

  test('Validate Buying Links', async ({ page }) => {
    await page.goto('http://localhost:3100');

    const buyingLinks = ['Buyer Policy', 'Kwek Return Policy'];
    for (const linkText of buyingLinks) {
      const linkLocator = page.locator(`a:has-text("${linkText}")`);
      await expect(linkLocator).toBeVisible();
      await linkLocator.click();
      await page.goBack();
    }
  });

  test('Validate Selling Links', async ({ page }) => {
    await page.goto('http://localhost:3100');

    const sellingLinks = ['Sell on Kwek', 'Seller Policy'];
    for (const linkText of sellingLinks) {
      const linkLocator = page.locator(`a:has-text("${linkText}")`);
      await expect(linkLocator).toBeVisible();
      await linkLocator.click();
      await page.goBack();
    }
  });

  test('Validate More Info Links', async ({ page }) => {
    await page.goto('http://localhost:3100');

    const moreInfoLinks = ['Privacy Policy', 'Billing Policy'];
    for (const linkText of moreInfoLinks) {
      const linkLocator = page.locator(`a:has-text("${linkText}")`);
      await expect(linkLocator).toBeVisible();
      await linkLocator.click();
      await page.goBack();
    }
  });
});

test.describe('Footer Social Media Test', () => {
  test('Validate Social Media Links', async ({ page }) => {
    await page.goto('http://localhost:3100');

    const socialMediaSelectors = [
      'a[href*="facebook"]',
      'a[href*="instagram"]',
      'a[href*="twitter"]',
    ];

    for (const selector of socialMediaSelectors) {
      const socialLink = page.locator(selector);
      await expect(socialLink).toBeVisible();
    }
  });
});

test.describe('Footer Text Test', () => {
  test('Validate Footer Text', async ({ page }) => {
    await page.goto('http://localhost:3100');

    const footerText = page.locator('text=Kwekmarket eCommerce © 2022 . All Rights Reserved');
    await expect(footerText).toBeVisible();
  });
});
