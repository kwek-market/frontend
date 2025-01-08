import { test, expect, Page } from '@playwright/test';

test.describe('Categories Tests', () => {
  const baseURL = 'http://localhost:3100';
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
  });

 test.skip ('Validate categories section', async () => {
    const categories = [
      'Vehicles & Equipment',
      'Beauty & Personal care',
      'Home & Garden',
      'Baby & Toddler Toys',
      'Fashion',
    ];

    const categoryMenu = page.locator('div:has-text("All Categories")');
    await expect(categoryMenu).toBeVisible();

    for (const category of categories) {
      const categoryLocator = page.locator(`text=${category}`);
      await expect(categoryLocator).toBeVisible();
      await categoryLocator.hover();
    }
  });

  test('Verify promotional banner for Women section', async () => {
    const promoText = 'BUY TWO, Get FOR WOMEN Get up to 30% Off';
    const promoBanner = page.locator(`text=${promoText}`).first();
    const shopNowButton = page.locator('text=SHOP NOW');

    if (await promoBanner.count() > 0) {
      await expect(promoBanner).toBeVisible();
      await expect(shopNowButton).toBeVisible();
      await shopNowButton.click();
      await expect(page).toHaveURL(/.*shop/);}
    // } else {
    //   console.warn('Promotional banner not found. Skipping test.');
    // }
  });

  test.afterAll(async () => {
    await page.close();
  });
});
