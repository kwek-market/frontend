import { test, expect } from '@playwright/test';
import { config } from '../../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../../utils/adminAuth';


test.describe('Admin Dashboard Tests', () => {
    test.beforeEach(async ({ page }) => {      
      await loginAsNormalUser(page); 
      await switchToAdminUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
    });

    test('should display manage categories section and navigating to New categories', async ({ page }) => {
      const manageCategoriesSection = await page.locator('div.tw-cursor-pointer:has-text("Manage Categories")');
      await expect(manageCategoriesSection).toBeVisible();
      await manageCategoriesSection.click();
    
      const newCategoryLink = manageCategoriesSection.locator('a[href="/admin/categories/add-category"]');
      await expect(newCategoryLink).toBeVisible();
    
    
      await newCategoryLink.click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/categories/add-category`);
      
    });
    
    test('should display the Visibility radio buttons and check default', async ({ page }) => {

      const manageCategoriesSection = await page.locator('div.tw-cursor-pointer:has-text("Manage Categories")');
      await expect(manageCategoriesSection).toBeVisible();
      await manageCategoriesSection.click();
    
      const newCategoryLink = manageCategoriesSection.locator('a[href="/admin/categories/add-category"]');
      await expect(newCategoryLink).toBeVisible();
    
    
      await newCategoryLink.click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/categories/add-category`);

      const publishedRadio = page.locator('input#Published');
      const scheduledRadio = page.locator('input#Scheduled');
      const hiddenRadio = page.locator('input#Hidden');
    
      await expect(publishedRadio).toBeChecked();
      await expect(scheduledRadio).not.toBeChecked(); 
      await expect(hiddenRadio).not.toBeChecked();
      });
    
    test('should display the Publish Date field with default value', async ({ page }) => {
      const manageCategoriesSection = await page.locator('div.tw-cursor-pointer:has-text("Manage Categories")');
      await expect(manageCategoriesSection).toBeVisible();
      await manageCategoriesSection.click();
    
      const newCategoryLink = manageCategoriesSection.locator('a[href="/admin/categories/add-category"]');
      await expect(newCategoryLink).toBeVisible();
    
    
      await newCategoryLink.click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/categories/add-category`);

      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0'); 
      const dd = String(today.getDate()).padStart(2, '0');
      const todayDate = `${yyyy}-${mm}-${dd}`;


      const publishDateInput = page.locator('input[type="date"]');
      await publishDateInput.fill(todayDate);
    });
    
    
    test('Add new categories', async ({ page }) => {
      const manageCategoriesSection = await page.locator('div.tw-cursor-pointer:has-text("Manage Categories")');
      await expect(manageCategoriesSection).toBeVisible();
      await manageCategoriesSection.click();
    
      const newCategoryLink = manageCategoriesSection.locator('a[href="/admin/categories/add-category"]');
      await expect(newCategoryLink).toBeVisible();
    
    
      await newCategoryLink.click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/categories/add-category`);

      const nameInput = page.locator('input[placeholder="e.g Fashion"]');
      await nameInput.fill('Dresses');
  
    
      const mainCategorySelect = page.locator('select[aria-placeholder="Select Main Category"]');
      await mainCategorySelect.waitFor({ state: 'visible', timeout: 100000 });
      await mainCategorySelect.selectOption({
        label: 'Fashion', 
        });
      
      // const subParentCategorySelect = page.locator('select[aria-placeholder="Select subcategory"]');
      // await subParentCategorySelect.selectOption({ label: 'Women wears' }); 
    
      const publishedOption = page.locator('input#Published');
      await publishedOption.click();
      await expect(publishedOption).toBeChecked();


      const fileInput = page.locator('input[type="file"]');
      await fileInput.setInputFiles('../../assets/dress.jpeg');

      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0'); 
      const dd = String(today.getDate()).padStart(2, '0');
      const todayDate = `${yyyy}-${mm}-${dd}`;


      const publishDateInput = page.locator('input[type="date"]');
      await publishDateInput.fill(todayDate);
    

      await expect(publishDateInput).toHaveValue(todayDate);

      const submitButton = page.locator('button[type="submit"]');
      await submitButton.click();

      const successMessage = page.locator('.ant-message-success span:has-text("Subcategory added successfully")');


      await expect(successMessage).toBeVisible();

     
      await expect(page).toHaveURL(`${config.baseUrl}/admin/categories/category-list`); 
    });
    
    test('should flag publish categories if required fields are not filled', async ({ page }) => {
      const manageCategoriesSection = await page.locator('div.tw-cursor-pointer:has-text("Manage Categories")');
      await expect(manageCategoriesSection).toBeVisible();
      await manageCategoriesSection.click();

      const newCategoryLink = manageCategoriesSection.locator('a[href="/admin/categories/add-category"]');
      await expect(newCategoryLink).toBeVisible();


      await newCategoryLink.click();
      await expect(page).toHaveURL(`${config.baseUrl}/admin/categories/add-category`);

      // Intentionally leaving out required fields to trigger validation
      await page.locator('input#Published').check(); // Checking Published without filling other fields

      const submitButton = page.locator('button[type="submit"]');
      await expect(submitButton).toBeEnabled();
      await submitButton.click();

      // Assertions for validation errors
      const errorMessage = page.locator('.ant-message-error span:has-text("String must contain at least 3 character(s)")');


      await expect(errorMessage).toBeVisible();
    });

  
});
