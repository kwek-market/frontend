// loginHelper.ts
import { expect, Page } from '@playwright/test';
import baseURL from '@playwright/test';
export async function login(page: Page) {
  // Step 1: Navigate to the login page
  await page.goto(`${baseURL}/login`);

  // Step 2: Fill in the login credentials
  await page.fill('input[name="email"]', 'afuyejames@gmail.com');
  await page.fill('input[name="password"]', 'Abiodune22@');

  // Step 3: Click the "Sign In" button
  await page.click('text=Sign In');

  // Step 4: Verify successful login
  await page.waitForURL(`${baseURL}`, { timeout: 800000 });
  // Step 6: Locate and click the "Shop" button
      const shopButton = page.locator('nav a:has-text("Shop")');
  
      await shopButton.waitFor({ state: 'visible', timeout: 8000000 });
      await shopButton.scrollIntoViewIfNeeded();
      await shopButton.click();
  
      // // Step 5: Verify successful navigation to the seller profile
       await expect(page).toHaveURL(`${baseURL}/seller/profile`, {timeout: 800000});
}
