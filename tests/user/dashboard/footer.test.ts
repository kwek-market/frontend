import { test, expect } from "@playwright/test";
//passed
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