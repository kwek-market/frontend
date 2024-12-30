import { test, expect } from '@playwright/test';

test.describe('Product Details Page Tests', () => {
  const categoryPageUrl = 'http://localhost:3100/category/Beauty%20&%20Personal%20Care';

  test('Validate product details for all products dynamically', async ({ page }) => {
    // Navigate to the category page
    await page.goto(categoryPageUrl);
    await page.waitForLoadState('networkidle');

    // Wait for product links to load
    await page.waitForSelector('a.product-link', { timeout: 15000 });

    // Extract all product links
    const productLinks = await page.$$eval('a.product-link', (links) =>
      links
        .filter((link) => link instanceof HTMLAnchorElement)
        .map((link) => (link as HTMLAnchorElement).href)
    );

    console.log('Extracted product links:', productLinks);

    // Verify we have found product links
    expect(productLinks.length).toBeGreaterThan(0);

    // Loop through each product link and validate its details page
    for (const productLink of productLinks) {
      console.log(`Testing product details page: ${productLink}`);

      // Navigate to the product details page
      await page.goto(productLink);

      // Verify key elements on the product details page
      const productName = await page.locator('h1.product-title').textContent();
      const productPrice = await page.locator('.product-price').textContent();
      const buyNowButton = page.locator('button:has-text("Buy Now")');

      // Assertions
      expect(productName).not.toBeNull();
      expect(productPrice).toMatch(/₦\d+/); // Ensure price format is correct
      await expect(buyNowButton).toBeVisible();

      console.log(`Validated product: ${productName}, Price: ${productPrice}`);
    }
  });
});
