import { test, expect } from "@playwright/test";

test.describe.skip('Footer Navigation Links Test', () => {
  test.setTimeout(30000); // Increased timeout for slow loads

  const footerLinks = [
    { name: 'Buyer Policy', path: '/buyerPolicy', url: 'http://localhost:3100/buyerPolicy' },
    { name: 'Kwek Return Policy', path: '/returnPolicy', url: 'http://localhost:3100/returnPolicy' },
  ];

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3100');
  });

  footerLinks.forEach(link => {
    test(`should navigate to correct page when clicking "${link.name}" footer link`, async ({ page }) => {
      const footer = page.locator('footer');
      const footerLink = footer.locator(`text=${link.name}`);
      
      await footerLink.scrollIntoViewIfNeeded(); // Ensure visibility
      await expect(footerLink).toBeVisible();

      await footerLink.click(); // Click the link
      
      // Wait for the URL to update
      await page.waitForURL(link.url, { timeout: 60000 });

      // Optional: Assert that a specific element on the page is loaded
      const pageHeader = page.locator('h1'); // Replace 'h1' with an appropriate selector
      await expect(pageHeader).toBeVisible();
    });
  });
});
