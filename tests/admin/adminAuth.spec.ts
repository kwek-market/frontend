import { test, expect } from '@playwright/test';
import { config } from '../utils/config'
import { loginAsNormalUser, switchToAdminUser, switchToUser } from  '../utils/adminAuth';


test.describe('Admin Auth', () => {
    test.beforeEach( async ({ page }) => {
      await loginAsNormalUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/login`, { timeout: 100000 });
    });

    test('User to Admin page', async ({ page }) => {
      await switchToAdminUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
    });

    test('Admin to User page', async ({ page }) => {
      await switchToAdminUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
      
      await switchToUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}`, { timeout: 100000});
    });

  

});