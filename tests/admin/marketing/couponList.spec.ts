import { test, expect } from '@playwright/test';
import { config } from '../../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../../utils/adminAuth';


test.describe('Admin Dashboard Tests', () => {
    test.beforeEach(async ({ page }) => {      
      await loginAsNormalUser(page); 
      await switchToAdminUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
    });
    test('should navigate correctly when Coupon List is clicked', async ({ page }) => {
        const marketingButton = page.locator('text=Marketing');
        await marketingButton.click();

        await page.click('a[href="/admin/marketing/coupon-list"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/marketing/coupon-list`);

        const header = page.locator('h1', { hasText: 'Coupons' });
        await expect(header).toBeVisible();
      });

      test('Verify New Coupon button is visible and navigates correctly', async ({ page }) => {
             const marketingButton = page.locator('text=Marketing');
        await marketingButton.click();

        await page.click('a[href="/admin/marketing/coupon-list"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/marketing/coupon-list`);
      
        const newCouponButton = page.locator('button', { hasText: 'New Coupon' });
        await expect(newCouponButton).toBeVisible();
        await expect(newCouponButton).toBeEnabled();
      
        await newCouponButton.click();
        await expect(page).toHaveURL(`${config.baseUrl}/admin/marketing/new-coupon`);
      });
      
    
      
      test('Validate empty table message on Coupons page', async ({ page }) => {
        const marketingButton = page.locator('text=Marketing');
        await marketingButton.click();

        await page.click('a[href="/admin/marketing/coupon-list"]');
        await expect(page).toHaveURL(`${config.baseUrl}/admin/marketing/coupon-list`);
      
        const headers = page.locator('.ant-table-thead th');
        await expect(headers.nth(0)).toHaveText('Coupon Code');
        await expect(headers.nth(1)).toHaveText('Discount Value');
        await expect(headers.nth(2)).toHaveText('Date Created');
        await expect(headers.nth(3)).toHaveText('Valid Until');
      });
      
 });