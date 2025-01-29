import { test, expect } from '@playwright/test';
  import { login } from '../utils/sellerloginHelper';

  test.describe('Promotion Navigation', () => {
    test('Login and navigate to product page', async ({ page }) => {
      // Reuse the login step
      await login(page);
  
    
    // Locate and click  "promotion"
    const urlButton = page.locator('text="Promotion"');
    await expect(urlButton).toBeVisible(); // Ensure it's visible
    await urlButton.click();
       
    // Locate and click  "new promotion"
        const newProductButton = page.locator('text="New Promotion"');
        await expect(newProductButton).toBeVisible(); // Ensure it's visible
        await newProductButton.click();
    //
    await expect(page).toHaveURL('http://localhost:3100/seller/promote-product');
  });
});