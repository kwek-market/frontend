  import { test, expect } from '@playwright/test';
  import { login } from '../utils/sellerloginHelper';

  test.describe('Product Navigation', () => {
    test('Login and navigate to product page', async ({ page }) => {
      // Reuse the login step
      await login(page);
  
    // Click the first button with "Copy Store Url"
      const urlButton = page.locator('button.tw-rounded-sm.tw-bg-yellow-filled:has-text("Copy Store Url")');
      await urlButton.waitFor({ state: 'visible', timeout: 60000 }); // Wait for up to 60 seconds
      await urlButton.click();
      
    // Locate and click "New Product"
     const newProductButton = page.locator('button.tw-rounded-sm.tw-bg-yellow-filled:has-text("New Product")');
     await expect(newProductButton).toBeVisible(); // Ensure it's visible
    await newProductButton.click();

  });
});

 

