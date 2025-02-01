import { test, expect } from '@playwright/test';
import { config } from '../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../utils/adminAuth';


test.describe('Admin Dashboard Tests', () => {
  test.beforeEach(async ({ page }) => {      
    await loginAsNormalUser(page); 
    await switchToAdminUser(page);
    await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
  });
  

  test('Admin Dashboard Metrics Validation', async ({ page }) => {
  const dashboardHeading = page.locator('h1', { hasText: 'Dashboard' });
  await expect(dashboardHeading).toBeVisible();

  const dropdown = page.locator('//*[@id="__next"]/div/div/div[2]/div[2]/div[1]/div/div[1]/select');
  await dropdown.selectOption('lastMonth');

  const exportButton = page.locator('button', { hasText: 'Export PDF' });
  await exportButton.click();
  });

  test('Verify total orders and total sales', async ({ page }) => {
    const totalOrdersSection = await page.locator('div', { hasText: 'TOTAL ORDERS' });
    await expect(totalOrdersSection).toBeVisible();
  
    const totalOrdersValue = await totalOrdersSection.locator('h2').textContent();
    expect(totalOrdersValue).not.toBeNull();
    console.log('Total Orders:', totalOrdersValue);
  
    // Locate the total sales section
    const totalSalesSection = await page.locator('div', { hasText: 'TOTAL SALES' });
    await expect(totalSalesSection).toBeVisible();
  
    // Extract the sales amount
    const totalSalesValue = await totalSalesSection.locator('h2').textContent();
    expect(totalSalesValue).not.toBeNull();
    console.log('Total Sales:', totalSalesValue);
  });
  
});
