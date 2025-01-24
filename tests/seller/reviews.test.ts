  import { test, expect } from '@playwright/test';
  import { login } from '../utils/sellerloginHelper';

  test.describe('Product Navigation', () => {
    test('Login and navigate to product page', async ({ page }) => {
      // Reuse the login step
      await login(page);
  
    
    // Locate and click  "reviews"
    const urlButton = page.locator('text="Reviews"');
    await expect(urlButton).toBeVisible(); // Ensure it's visible
    await urlButton.click();
       
    

  });
});

 

