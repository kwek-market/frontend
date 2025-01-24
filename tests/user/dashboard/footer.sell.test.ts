import { test, expect } from "@playwright/test";

const links = [
  { text: 'Sell on Kwek', url: 'http://localhost:3100/seller-profile' },
  { text: 'Seller Policy', url: 'http://localhost:3100/sellerpolicy' },
  { text: 'Privacy Policy', url: 'http://localhost:3100/privacypolicy' },
  { text: 'Billing Policy', url: 'http://localhost:3100/billingpolicy' },
];

test.describe('Footer Links Test', () => {
  links.forEach(link => {
    test(`Validate navigation for "${link.text}" link`, async ({ page }) => {
      // Open the main page before each iteration to ensure correct context
      await page.goto('http://localhost:3100');
      
      // Wait for the footer to ensure it's fully loaded
      const footerLink = page.locator(`text=${link.text}`);
      await footerLink.waitFor({ state: 'visible' });

      // Validate link visibility and click
      await expect(footerLink).toBeVisible();
      await footerLink.click();
      
      // Validate the URL
      await expect(page).toHaveURL(link.url);
    });
  });
});
