import { test, expect } from "@playwright/test";

test.describe("Footer kwek link Test", () => {
  let footerLinks = [];

  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
    footerLinks = [
      { name: "About Us", url: `${baseURL}/aboutUs"`},
      { name: "Contact Us", url: `${baseURL}/contact-us"`},
      { name: "Terms of Service", url: `${baseURL}/terms-of-service` },
    ];
  });

  footerLinks.forEach((link) => {
    test(`should navigate to the correct page when clicking "${link.name}" footer link`, async ({
      page,
    }) => {
      const footerLink = page
        .locator(`footer a`)
        .filter({ hasText: link.name });

      // Ensure the link is visible and clickable
      await footerLink.scrollIntoViewIfNeeded();
      await expect(footerLink).toBeVisible();

      // Click the link and wait for navigation
      await Promise.all([
        page.waitForURL(link?.url, { timeout: 40_0000 }),
        footerLink.click(),
      ]);

      // Verify the URL after navigation
      await expect(page).toHaveURL(link?.url);
    });
  });
});
//  // Step 6: Locate and click the "Shop" button
// const shopButton = page.locator('nav a:has-text("Shop")');

// await shopButton.waitFor({ state: 'visible', timeout: 80000 });
// await shopButton.scrollIntoViewIfNeeded();
// await shopButton.click();
