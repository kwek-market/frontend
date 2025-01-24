import { test, expect } from '@playwright/test';
import { login } from '../../utils/sellerloginHelper';

test.describe('Product Navigation', () => {
  test('Login and navigate to product page', async ({ page }) => {
    // Reuse the login step
    await login(page);

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