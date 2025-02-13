import { test, expect } from '@playwright/test';
import { config } from '../../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../../utils/adminAuth';


test.describe('Admin Dashboard Tests', () => {
    test.beforeEach(async ({ page }) => {      
      await loginAsNormalUser(page); 
      await switchToAdminUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
    });
    test('should display dropdown items when Vendors is clicked', async ({ page }) => {
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();
        
        const vendorAppLink = page.locator('a[href="/admin/vendors/vendor-application"]');
        const vendorListLink = page.locator('a[href="/admin/vendors/vendor-list"]');
    
        await expect(vendorAppLink).toBeVisible();
        await expect(vendorListLink).toBeVisible();
      });
    
    test('should navigate correctly when Vendor Application is clicked', async ({ page }) => {
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();

        await page.click('a[href="/admin/vendors/vendor-application"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/vendors/vendor-application`);

        const header = await page.locator('h1');
        await expect(header).toHaveText('Vendors Application');

      });


    test('Vendors Application tab', async ({ page }) => {
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();

        await page.click('a[href="/admin/vendors/vendor-application"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/vendors/vendor-application`);
       
        const newApplicationsTab = await page.locator('div#rc-tabs-0-tab-1');
        await expect(newApplicationsTab).toHaveClass("ant-tabs-tab-btn");
      
        const tableHeaders = await page.locator('thead .ant-table-cell');
        await expect(tableHeaders).toHaveText(['Name', 'Email Address', 'Phone Number', 'Date Applied', 'Country', 'State', 'Decision']);
      
        const vendorAppTab = page.locator('#rc-tabs-0-tab-2');
        await vendorAppTab.click();
    
  
    
      });

    test('should show declined applications tab', async ({ page }) => {
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();

        await page.click('a[href="/admin/vendors/vendor-application"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/vendors/vendor-application`);
        
        const declinedTab = await page.locator('#rc-tabs-0-tab-2'); 
        await expect(declinedTab).toBeVisible();
        await declinedTab.click();
    
        // Ensure the tab becomes active
        await expect(declinedTab).toHaveClass("ant-tabs-tab-btn");
      });

    test('should show the Declined Applications table', async ({ page }) => {
       
        const vendorsButton = page.locator('text=Vendors');
        await vendorsButton.click();

        await page.click('a[href="/admin/vendors/vendor-application"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/vendors/vendor-application`);
        

        const declinedTab = page.locator('#rc-tabs-0-tab-2'); 
        await declinedTab.click();
    

        const tableHeaders = declinedTab.locator('thead .ant-table-cell');
        await expect(tableHeaders).toHaveText([
          'Name', 
          'Email Address', 
          'Phone Number', 
          'Date Applied', 
          'Country', 
          'State', 
          'Decision'
        ]);
      });
      
 });