import { test, expect } from '@playwright/test';
import { config } from '../../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../../utils/adminAuth';


test.describe('Admin Dashboard Tests', () => {
    test.beforeEach(async ({ page }) => {      
      await loginAsNormalUser(page); 
      await switchToAdminUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
    });

    test('should navigate correctly when New Coupon is clicked', async ({ page }) => {
       
        const marketingButton = page.locator('text=Marketing');
        await marketingButton.click();
        
        await page.click('a[href="/admin/marketing/new-coupon"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/marketing/new-coupon`);
      });

      test('should display error message for empty form submission', async ({ page }) => {
        const marketingButton = page.locator('text=Marketing');
        await marketingButton.click();
        
        await page.click('a[href="/admin/marketing/new-coupon"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/marketing/new-coupon`);

        await page.click('button[type="submit"]');
        
        const errorMessage = page.locator('.ant-message-error span:has-text("Discount value is required")');

        await expect(errorMessage).toBeVisible();
    
      });
    
      test('should successfully create a coupon with valid data', async ({ page }) => {
        const marketingButton = page.locator('text=Marketing');
        await marketingButton.click();
        
        await page.click('a[href="/admin/marketing/new-coupon"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/marketing/new-coupon`);

        await page.fill('input[placeholder="input the value of the discount given"]', '20');
          
        await page.click('input[placeholder="Select date"]');
        const yearButton = page.locator('.ant-picker-year-btn');
        if (await yearButton.textContent() !== '2025') {
            await page.click('.ant-picker-header-next-btn'); 
        }

        const monthButton = page.locator('.ant-picker-month-btn');
        if (await monthButton.textContent() !== 'Mar') {
            await page.click('.ant-picker-header-next-btn'); 
        }

     
        await page.click('td[title="2025-03-10"] .ant-picker-cell-inner');

    
        await page.click('button[type="submit"]');
    
        const successMessage= page.locator('.ant-message-success span:has-text("Coupon created successfully")');


        await expect(successMessage).toBeVisible();
       
      });
 });