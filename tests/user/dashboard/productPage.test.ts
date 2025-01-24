import { test, expect } from '@playwright/test';

test.describe('Fashion Product Page', () => {
  test('should render all UI elements on the beauty page', async ({ page }) => {
    // Navigate to the product page
    await page.goto('http://localhost:3100/product/e1845d8d-f1af-4c70-8846-cfb658f9a71c?id=HP%20250%2015.6%20inch%20G10%20Notebook%20PC');

    // Validate the UI elements
    await expect(page.getByText('COLOR:')).toBeVisible();
    await expect(page.getByText('SIZE:')).toBeVisible();
    await expect(page.getByText('Warranty')).toBeVisible();
    await expect(page.getByText('Return Policy:')).toBeVisible();
    
    //await expect(page.getByTestId('productHead_subDesc__o4XYd')).toBeVisible();

    //// Locate the product grid
    const productGrid = page.locator('.GridContainer_products__9AobY');

    // Locate and validate the product price within the grid
    const productPrice = productGrid.locator('.productHead_product-price_jNMeZ');

    // Wait for the price element to be visible
    await expect(productPrice).toBeVisible();

    // Optionally, retrieve and log the price text
    const priceText = await productPrice.textContent();
    console.log(`Price displayed: ${priceText?.trim()}`);
  
  });

  test.describe('Fashion Product Page', () => {
    test('should handle button interactions', async ({ page }) => {
      // Navigate to the product page
      await page.goto('http://localhost:3100/product/e1845d8d-f1af-4c70-8846-cfb658f9a71c?id=HP%20250%2015.6%20inch%20G10%20Notebook%20PC');
  
      // Locate and click "Buy Now"
      const buyNowButton = page.locator('text="Buy Now"');
      await expect(buyNowButton).toBeVisible(); // Ensure it's visible
      await buyNowButton.click();
  
      // Locate and click "Save for Later"
      const saveForLaterButton = page.locator('text="Save for Later"');
      await expect(saveForLaterButton).toBeVisible(); // Ensure it's visible
      await saveForLaterButton.click();
    });
  });
});
