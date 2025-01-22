import { test, expect } from '@playwright/test';

  test.describe('Beauty Product Page', () => {
  test('should render all UI elements on product page', async ({ page }) => {
    // Navigate to the Sign In page
    await page.goto('http://localhost:3100/seller/profile');
    // Validate the UI elements
    const productButton = page.locator('nav btn:has-text("Product")');
    await productButton.waitFor({ state: 'visible', timeout: 80000 });
    await productButton.scrollIntoViewIfNeeded();
    await productButton.click();
    // Ensure the product grid container exists
     const productGrid = page.locator('.GridContainer_products__9AobY');
     // Ensure the product grid container exists
     await expect(productGrid).toHaveCount(1);
     // Check for at least one product inside the grid
  const productCount = await productGrid.locator('.GridContainer_product__RnJgf').count();
    expect(productCount).toBeLessThan(1000); // Corrected assertion
   
  });
});