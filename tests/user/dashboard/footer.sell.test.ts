import { test, expect } from "@playwright/test";


test.describe("Footer kwek link Test", () => {
  let footerLinks = [];

  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
    footerLinks = [
      { text: "Sell on Kwek", url: `${baseURL}/seller-profile"`},
  { text: "Seller Policy", url: `${baseURL}/sellerpolicy"` },
  { text: "Privacy Policy", url: `${baseURL}/privacypolicy"` },
  { text: "Billing Policy", url: `${baseURL}/billingpolicy" `},
    ];
    });
  });

test.describe("Footer Links Test", () => {
  footerLinks.forEach((link) => {
    test(`Validate navigation for "${link.text}" link`, async ({ page, baseURL }) => {
      // Open the main page before each iteration to ensure correct context
      await page.goto(`${baseURL}`);

      // Wait for the footer to ensure it's fully loaded
      const footerLink = page.locator(`text=${link.text}`);
      await footerLink.waitFor({ state: "visible" });

      // Validate link visibility and click
      await expect(footerLink).toBeVisible();
      await footerLink.click();

      // Validate the URL
      await expect(page).toHaveURL(link?.url);
    });
  });