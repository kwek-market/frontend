import { test, expect } from '@playwright/test';
import { config } from '../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../utils/adminAuth';


test.describe('Admin Dashboard Tests', () => {
    test.beforeEach(async ({ page }) => {      
      await loginAsNormalUser(page); 
      await switchToAdminUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
    });

    test('Navigate to customer page ', async ({ page, baseURL }) => {
      await page.getByRole('link', { name: 'Customers', exact: true }).click();
    await expect(page).toHaveURL(`${baseURL}/admin/customers`);  
    
      // Verify the "Customers" heading
      const customersHeading = page.locator('h1');
      await expect(customersHeading).toHaveText('Customers');
    });

    test('Verify the send email button ', async ({ page, baseURL }) => { 
      await page.getByRole('link', { name: 'Customers', exact: true }).click();
      await expect(page).toHaveURL(`${baseURL}/admin/customers`);  
      
      const sendEmailButton = page.locator('a[href="/admin/emails/create"] button');
      await expect(sendEmailButton).toBeVisible();
      await sendEmailButton.click();  
    });

    test('Check the presence of tabs', async ({ page, baseURL }) => {
      await page.getByRole('link', { name: 'Customers', exact: true }).click();
      await expect(page).toHaveURL(`${baseURL}/admin/customers`);  
        
      // Check the presence of tabs
      const activeTab = page.locator('#rc-tabs-0-tab-1');
      const inactiveTab = page.locator('#rc-tabs-0-tab-2');

      await expect(activeTab).toHaveText('Active');
      await expect(inactiveTab).toHaveText('Inactive');

      // Click the "Inactive" tab and verify the content changes
      await inactiveTab.click();
      await expect(page.locator('#rc-tabs-0-panel-2')).toBeVisible();
    });

});