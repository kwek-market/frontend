import { test, expect, Page } from '@playwright/test';

test.describe('Categories Tests', () => {
  const baseURL = 'http://localhost:3100';
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
  });

  test("Wishlist icon should navigate to wishlist page", async () => {
    // Find the element with the text 'saved' and click on it
    const savedLink = page.locator('text=saved');
    await savedLink.waitFor({ state: 'visible', timeout: 40000 }); // Ensure the element is visible
    await savedLink.click({ timeout: 30000 });
  
    // Assert the page URL is the wishlist page
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
      await expect(page).toHaveURL(/.*shop/);}
    // } else {
    //   console.warn('Promotional banner not found. Skipping test.');
    // }
  });

  test('Navigate and validate category: Vehicles & Equipment', async () => {
  await page.goto('http://localhost:3100', { waitUntil: 'networkidle' });

  // Ensure React Query DevTools does not interfere
  await page.locator('aside[aria-label="React Query Devtools"]').evaluate(node => node.style.display = 'none');

  // Locate and click the Vehicles & Equipment link
  const vehiclesLink = page.locator('a.CategoryMenu_menu_link__WwrlG:visible:has-text("Vehicles & Equipment")');
  await vehiclesLink.scrollIntoViewIfNeeded();
  await vehiclesLink.click({ timeout: 120000 });

  // Validate the page title after navigation
  const pageTitle = page.locator('p.pageTitle_category_title__eZOLz');
  await expect(pageTitle).toHaveText('Vehicles & Equipment');
});

test('Navigate and validate category: Beauty & Personal care', async ({ page }) => {
  await page.goto('http://localhost:3100', { waitUntil: 'networkidle' });

  // Ensure React Query DevTools does not interfere
  await page.locator('aside[aria-label="React Query Devtools"]').evaluate(node => node.style.display = 'none');

  // Locate and click the Beauty & Personal care link
  const beautyLink = page.locator('a.CategoryMenu_menu_link__WwrlG:visible:has-text("Beauty & Personal care")');
  await beautyLink.scrollIntoViewIfNeeded();
  await beautyLink.click({ timeout: 120000 });

  // Validate the page title after navigation
  const pageTitle = page.locator('p.pageTitle_category_title__eZOLz');
  await expect(pageTitle).toHaveText('Beauty & Personal care');
});

  
test('Navigate and validate category: Home & Garden', async ({ page }) => {
  await page.goto('http://localhost:3100', { waitUntil: 'networkidle' });

  // Ensure React Query DevTools does not interfere
  await page.locator('aside[aria-label="React Query Devtools"]').evaluate(node => node.style.display = 'none');

  // Locate and click the Home & Garden link
  const homeGardenLink = page.locator('a.CategoryMenu_menu_link__WwrlG:visible:has-text("Home & Garden")');
  await homeGardenLink.scrollIntoViewIfNeeded();
  await homeGardenLink.click({ timeout: 120000 });

  // Validate the page title after navigation
  const pageTitle = page.locator('p.pageTitle_category_title__eZOLz');
  await expect(pageTitle).toHaveText('Home & Garden');
});

  
test('Navigate and validate category: Baby & Toddler Toys', async ({ page }) => {
  await page.goto('http://localhost:3100', { waitUntil: 'networkidle' });

  // Ensure React Query DevTools does not interfere
  await page.locator('aside[aria-label="React Query Devtools"]').evaluate(node => node.style.display = 'none');

  // Locate and click the Baby & Toddler Toys link
  const babyToddlerToysLink = page.locator('a.CategoryMenu_menu_link__WwrlG:visible:has-text("Baby & Toddler Toys")');
  await babyToddlerToysLink.scrollIntoViewIfNeeded();
  await babyToddlerToysLink.click({ timeout: 30000 });

  // Validate the page title after navigation
  const pageTitle = page.locator('p.pageTitle_category_title__eZOLz');
  await expect(pageTitle).toHaveText('Baby & Toddler Toys');
});

  
test('Navigate and validate category: Fashion', async ({ page }) => {
  await page.goto('http://localhost:3100', { waitUntil: 'networkidle' });

  // Ensure React Query DevTools does not interfere
  await page.locator('aside[aria-label="React Query Devtools"]').evaluate(node => node.style.display = 'none');

  // Locate and click the Fashion link
  const fashionLink = page.locator('a.CategoryMenu_menu_link__WwrlG:visible:has-text("Fashion")');
  await fashionLink.scrollIntoViewIfNeeded();
  await fashionLink.click({ timeout: 120000 });

  // Validate the page title after navigation
  const pageTitle = page.locator('p.pageTitle_category_title__eZOLz');
  await expect(pageTitle).toHaveText('Fashion');
});

  
  

  test.afterAll(async () => {
    await page.close();
  });
});
