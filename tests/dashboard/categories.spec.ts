import { test, expect, Page } from '@playwright/test';

test.describe('Categories Tests', () => {
  const baseURL = 'http://localhost:3100';
  let page: Page;

  const navigateAndValidateCategory = async (categoryName: string) => {
    await page.goto(baseURL, { waitUntil: 'networkidle' });

    // Ensure React Query DevTools does not interfere
    await page.locator('aside[aria-label="React Query Devtools"]').evaluate(node => node.style.display = 'none');

    // Locate and click the category link
    const categoryLink = page.locator(`a.CategoryMenu_menu_link__WwrlG:visible:has-text("${categoryName}")`);
    await categoryLink.scrollIntoViewIfNeeded();
    await categoryLink.click({ timeout: 60000 });

    // Validate the page title after navigation
    const pageTitle = page.locator('p.pageTitle_category_title__eZOLz');
    await expect(pageTitle).toHaveText(categoryName);
  };

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
  });

  test("Wishlist icon should navigate to wishlist page", async () => {
    const savedLink = page.locator('text=saved');
    await savedLink.waitFor({ state: 'visible', timeout: 30000 });
    await savedLink.click({ timeout: 30000 });

    await expect(page).toHaveURL("http://localhost:3100/wishlist");
  });

  test('Verify promotional banner for Women section', async () => {
    const promoText = 'BUY TWO, Get FOR WOMEN Get up to 30% Off';
    const promoBanner = page.locator(`text=${promoText}`).first();
    const shopNowButton = page.locator('text=SHOP NOW');

    if (await promoBanner.count() > 0) {
      await expect(promoBanner).toBeVisible();
      await expect(shopNowButton).toBeVisible();
      await shopNowButton.click();
      await expect(page).toHaveURL(/.*shop/);
    }
  });

  const categories = [
    'Vehicles & Equipment',
    'Beauty & Personal care',
    'Home & Garden',
    'Baby & Toddler Toys',
    'Fashion'
  ];

  categories.forEach(category => {
    test(`Navigate and validate category: ${category}`, async () => {
      await navigateAndValidateCategory(category);
    });
  });

  test.afterAll(async () => {
    await page.close();
  });
});
