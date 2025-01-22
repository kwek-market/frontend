  import { test, expect } from '@playwright/test';
  test.describe('Seller Profile Navigation', () => {
  test('Login and navigate to seller profile', async ({ page }) => {
    // Step 1: Navigate to the login page
    await page.goto('http://localhost:3100/login');

    // Step 2: Fill in the login credentials
    await page.fill('input[name="email"]', 'afuyejames@gmail.com');
    await page.fill('input[name="password"]', 'Abiodune22@');

    // Step 3: Click the "Sign In" button
    await page.click('text=Sign In');

    // Step 6: Locate and click the "Shop" button
    const shopButton = page.locator('text=Switch to Admin');
    await shopButton.waitFor({ state: 'visible', timeout: 80000 });
    await shopButton.scrollIntoViewIfNeeded();
    await shopButton.click();

     // // Step 5: Verify successful navigation to the seller profile
    await expect(page).toHaveURL('http://localhost:3100/admin/dashboard');
  });
});
