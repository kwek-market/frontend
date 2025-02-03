import { test, expect } from '@playwright/test';
import { config } from '../../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../../utils/adminAuth';


test.describe('Admin Dashboard Tests', () => {
    test.beforeEach(async ({ page }) => {      
      await loginAsNormalUser(page); 
      await switchToAdminUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
    });

    test('should display manage categories section and navigating categories list', async ({ page }) => {
      const manageCategoriesSection = await page.locator('div.tw-cursor-pointer:has-text("Manage Categories")');
      await expect(manageCategoriesSection).toBeVisible();
      await manageCategoriesSection.click();
    
      const newCategoryLink = manageCategoriesSection.locator('a[href="/admin/categories/category-list"]');
      await expect(newCategoryLink).toBeVisible();
    
    
      await newCategoryLink.click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/categories/category-list`);

      const pageTitle = await page.locator('h1');
      await expect(pageTitle).toHaveText('Category List');
     });

    test('Navigating to new category page from categories list', async ({ page }) => {
      const manageCategoriesSection = await page.locator('div.tw-cursor-pointer:has-text("Manage Categories")');
      await expect(manageCategoriesSection).toBeVisible();
      await manageCategoriesSection.click();
    
      const newCategoryLink = manageCategoriesSection.locator('a[href="/admin/categories/category-list"]');
      await expect(newCategoryLink).toBeVisible();
    
    
      await newCategoryLink.click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/categories/category-list`);

    
      const newCategoryButton = await page.locator('button:has-text("New Category")');
      await expect(newCategoryButton).toBeVisible();
      await newCategoryButton.click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/categories/add-category`);
    
    });

    test('Category List page elements', async ({ page }) => {
      const manageCategoriesSection = await page.locator('div.tw-cursor-pointer:has-text("Manage Categories")');
      await expect(manageCategoriesSection).toBeVisible();
      await manageCategoriesSection.click();
    
      const newCategoryLink = manageCategoriesSection.locator('a[href="/admin/categories/category-list"]');
      await expect(newCategoryLink).toBeVisible();
    
    
      await newCategoryLink.click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/categories/category-list`);

      await page.waitForSelector('div table thead tr', { state: 'visible', timeout: 10000 });
      const headers = [
        'Category Name',
        'Items',
        'Visibility',
        'Actions'
      ];
  
      for (const header of headers) {
        await expect(page.locator(`table thead tr:has-text("${header}")`)).toBeVisible();
      }
  
    });

});