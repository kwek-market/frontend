import { test, expect } from '@playwright/test';
import { config } from '../../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../../utils/adminAuth';


test.describe('Admin Dashboard Tests', () => {
    test.beforeEach(async ({ page }) => {      
      await loginAsNormalUser(page); 
      await switchToAdminUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
    });

    test('should navigate correctly when Vendor List is clicked', async ({ page }) => {
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();

        await page.click('a[href="/admin/vendors/vendor-list"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/vendors/vendor-list`);


        const header = await page.locator('h1');
        await expect(header).toHaveText('Vendors List');

      });

    test('should display the vendors list table with correct headers', async ({ page }) => {
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();

        await page.click('a[href="/admin/vendors/vendor-list"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/vendors/vendor-list`);

        const tableHeaders = await page.locator('thead .ant-table-cell');
        await expect(tableHeaders).toHaveText(['Name','Email Address','Date Joined', 'Country','State','Wallet Balance', '']);
  
      });
    
      test('should show the Red Flagged Vendor tab', async ({ page }) => {
       
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();

        await page.click('a[href="/admin/vendors/vendor-application"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/vendors/vendor-application`);


        const redFlaggedTab  = await page.locator('#rc-tabs-0-tab-2'); 
        await expect(redFlaggedTab ).toBeVisible();
        await redFlaggedTab .click();
    
        // Ensure the tab becomes active
        await expect(redFlaggedTab).toHaveClass("ant-tabs-tab-btn");
      });

      test.skip('should show the Red Flagged Vendor table', async ({ page }) => {
       
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();

        await page.click('a[href="/admin/vendors/vendor-application"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/vendors/vendor-application`)
        

        const redFlaggedTab = page.locator('#rc-tabs-0-tab-2'); 
        await redFlaggedTab.click();
    
        const tableHeaders = await page.locator('thead .ant-table-cell');
        await expect(tableHeaders).toHaveText(['Name','Email Address','Date Joined', 'Country','State','Wallet Balance', '']);
     
      });

    
    test('should filter vendors using the search bar', async ({ page }) => {
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();

        await page.click('a[href="/admin/vendors/vendor-list"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/vendors/vendor-list`);

        const searchInput = page.locator('input[placeholder="Search by Store name"]');
        await searchInput.fill('auto');
        await page.keyboard.press('Enter');

        await expect(page.locator('table tbody tr')).not.toHaveText('No data', { timeout: 10000 });

        const firstCell = page.locator('tbody tr td').first();
        await firstCell.waitFor({ state: 'visible', timeout: 10000 });
        await expect(firstCell).toContainText('auto', { timeout: 10000 });
      });
    
    test('should have the "Send Bulk Email" button visible', async ({ page }) => {
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();

        await page.click('a[href="/admin/vendors/vendor-list"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/vendors/vendor-list`);

        const bulkEmailButton = page.locator('button:has-text("Send Bulk Email")');
        await expect(bulkEmailButton).toBeVisible();
      });

 
});