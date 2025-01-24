  import { test, expect } from '@playwright/test';
  import { login } from '../utils/sellerloginHelper';

  test.describe('Product Navigation', () => {
    test('Login and navigate to product page', async ({ page }) => {
      // Reuse the login step
      await login(page);
  
    
    // Locate and click  "settings"
    const urlButton = page.locator('text="Settings"');
    await expect(urlButton).toBeVisible(); // Ensure it's visible
    await urlButton.click();
  

  });
});

 

