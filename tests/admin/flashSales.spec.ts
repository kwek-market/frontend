import { test, expect } from '@playwright/test';
import { config } from '../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../utils/adminAuth';

test.describe('Product Page Tests', () => {
    test.beforeEach(async ({ page }) => {      
        await loginAsNormalUser(page); 
        await switchToAdminUser(page);
        await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
      });

  test('Navigating to the flash sales page',async ({page}) =>{
    
      await page.locator('a[href="/admin/flash-sales"]').click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/flash-sales`);  

      const header = await page.locator('h1');
      await expect(header).toHaveText('Flash Sales');
  });


  test('should navigate to New Flash Sale form', async ({ page }) => {
    await page.locator('a[href="/admin/flash-sales"]').click();
    await expect(page).toHaveURL(`${config.baseUrl}/admin/flash-sales`);  
    
    await page.click('a[href="/admin/flash-sales/new"]');
    await expect(page).toHaveURL(`${config.baseUrl}/admin/flash-sales/new`);
    await expect(page.locator('h1')).toHaveText('New Flash Sale');
  });

  test('should verify table headers are present', async ({ page }) => {
    await page.locator('a[href="/admin/flash-sales"]').click();
    await expect(page).toHaveURL(`${config.baseUrl}/admin/flash-sales`);  

    const headers = [
      'Product',
      'Date Created',
      'No. of Days',
      'Quantity',
      'Price',
      'Discount Price',
      'Status'
    ];

    for (const header of headers) {
      await expect(page.locator(`table thead tr:has-text("${header}")`)).toBeVisible();
    }
  });
});     