  import { test, expect } from '@playwright/test';
  import { login } from '../utils/sellerloginHelper';

  test.describe('Product Navigation', () => {
    test('Login and navigate to product page', async ({ page }) => {
      // Reuse the login step
      await login(page);
  
    
    // Locate and click  "Copy Store Url"
    const urlButton = page.locator('text="Copy Store Url"');
    await expect(urlButton).toBeVisible(); // Ensure it's visible
    await urlButton.click();
       
    // Locate and click  "Copy Store Url"
        const newProductButton = page.locator('text="New Product"');
        await expect(newProductButton).toBeVisible(); // Ensure it's visible
        await newProductButton.click();

  });
});

 

