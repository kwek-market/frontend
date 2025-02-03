import { test, expect } from '@playwright/test';
import { config } from '../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../utils/adminAuth';

test.describe('Product Page Tests', () => {
    test.beforeEach(async ({ page }) => {      
        await loginAsNormalUser(page); 
        await switchToAdminUser(page);
        await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
      });

  test('Navigating to settings  page',async ({page}) =>{
      await page.locator('a[href="/admin/settings"]').click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/settings`);  

      const header = await page.locator('h1');
      await expect(header).toHaveText('Settings');
  });
  test('Tabs are displayed correctly and functional', async ({ page }) => {
    await page.locator('a[href="/admin/settings"]').click();
    await expect(page).toHaveURL(`${config.baseUrl}/admin/settings`);  

    const tabs = page.locator('.ant-tabs-tab-btn');
    await expect(tabs.nth(0)).toHaveText('Charge');
    await expect(tabs.nth(1)).toHaveText('Email');

    await tabs.nth(1).click();
    await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
    await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'false');
  });

  
  test('Verify Edit Charges Modal', async ({ page }) => {
    await page.locator('a[href="/admin/settings"]').click();
    await expect(page).toHaveURL(`${config.baseUrl}/admin/settings`);  

    await page.getByRole('button', { name: 'Edit Charges' }).click();

    const chargeInput = page.locator('input[type="number"]');
    const commissionRadio = page.locator('input#Commission');
    const fixedAmountRadio = page.locator('input#Fixed\\ Amount');

    await expect(chargeInput).toBeVisible();
    await expect(chargeInput).toHaveValue('5');

    await expect(commissionRadio).toBeChecked();
    await expect(fixedAmountRadio).not.toBeChecked();

    await fixedAmountRadio.check();
    await expect(fixedAmountRadio).toBeChecked();
    await expect(commissionRadio).not.toBeChecked();

    await chargeInput.fill('10');
    await expect(chargeInput).toHaveValue('10');
  });
});     