import { test, expect } from '@playwright/test';
import { config } from '../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../utils/adminAuth';

test.describe('Product Page Tests', () => {
    test.beforeEach(async ({ page }) => {      
        await loginAsNormalUser(page); 
        await switchToAdminUser(page);
        await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
      });

  test('Navigating to State Delivery fee  page',async ({page}) =>{
      await page.locator('a[href="/admin/state-delivery-fee"]').click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/state-delivery-fee`);  

      const header = await page.locator('h1');
      await expect(header).toHaveText('State Delivery Fee');
  });


  test('should navigate to Update State Delivery Fee page when button is clicked', async ({ page }) => {
    await page.locator('a[href="/admin/state-delivery-fee"]').click();
    await expect(page).toHaveURL(`${config.baseUrl}/admin/state-delivery-fee`);  


    const updateButton = page.locator('a[href="/admin/state-delivery-fee/update"]');
    await expect(updateButton).toBeVisible();
    await updateButton.click();

    // Verify navigation
    await expect(page).toHaveURL(`${config.baseUrl}/admin/state-delivery-fee/update`);
  });

  test('Table Header Validation', async ({ page }) => {
    await page.locator('a[href="/admin/state-delivery-fee"]').click();
    await expect(page).toHaveURL(`${config.baseUrl}/admin/state-delivery-fee`);  

    const tableHeaders = page.locator('.ant-table-thead th');
    const expectedHeaders = ['No.', 'State', 'NO of Cities'];

    for (let i = 0; i < expectedHeaders.length; i++) {
      await expect(tableHeaders.nth(i)).toHaveText(expectedHeaders[i]);
    }
  });

});
   