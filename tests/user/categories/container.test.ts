import { test, expect, Page } from '@playwright/test';

test.describe('Categories Tests', () => {
  let page: Page;

  const navigateAndValidateCategory = async (categoryName: string) => {
    const baseURL = test.info().project.use.baseURL; // Dynamically get baseURL

    // Navigate to the base URL
    await page.goto(baseURL, { waitUntil: 'networkidle' });

    // Ensure React Query DevTools does not interfere
    await page
      .locator('aside[aria-label="React Query Devtools"]')
      .evaluateAll((nodes) => nodes.forEach((node) => (node.style.display = 'none')));

    // Locate and click the category link
    const categoryLink = page.locator(`a.CategoryMenu_menu_link__WwrlG:has-text("${categoryName}")`);
    await categoryLink.scrollIntoViewIfNeeded();
    await categoryLink.click({ timeout: 60000 });

    // Validate the page title after navigation
    const pageTitle = page.locator('p.pageTitle_category_title__eZOLz');
    await expect(pageTitle).toHaveText(categoryName, { timeout: 10000 });
  };

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
  });

  test('Verify promotional banner for Women section', async () => {
    const baseURL = test.info().project.use.baseURL; // Dynamically get baseURL

    const promoText = 'BUY TWO, Get FOR WOMEN Get up to 30% Off';
    const promoBanner = page.locator(`text=${promoText}`).first();
    const shopNowButton = page.locator('text=SHOP NOW');

    // Navigate to the base URL
    await page.goto(baseURL, { waitUntil: 'networkidle' });

    // Validate promotional banner visibility
    if (await promoBanner.count() > 0) {
      await expect(promoBanner).toBeVisible({ timeout: 10000 });
      await expect(shopNowButton).toBeVisible();
      await shopNowButton.click();
      await expect(page).toHaveURL(/.*shop/, { timeout: 10000 });
    }
  });

  test.afterAll(async () => {
    await page.close();
  });
});
