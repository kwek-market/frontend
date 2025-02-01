import { test, expect } from '@playwright/test';
import { config } from '../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../utils/adminAuth';
import page from '@/pages/deals-of-the-day/[id]';

test.describe('Product Page Tests', () => {
    test.beforeEach(async ({ page }) => {      
        await loginAsNormalUser(page); 
        await switchToAdminUser(page);
        await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
      });

  test('Navigating to product page',async ({page}) =>{
      await page.locator('a[href="/admin/products"]').click();
      await expect(page).toHaveURL('http://localhost:3100/admin/products');  
  });
      

  test('verify Product table headers', async ({ page }) => {
    await page.locator('a[href="/admin/products"]').click();
    await expect(page).toHaveURL('http://localhost:3100/admin/products');

    const table = page.locator('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div/div/div/div/div'); 
    await expect(table).toBeVisible();

    const headers = table.locator('//table/thead/tr');
    await headers.waitFor({ state: 'visible', timeout: 10000 });
    
    let actualHeaders: string[] = await headers.locator('th').allTextContents();
    
   
    actualHeaders = actualHeaders.map(header => header.trim()).filter(header => header !== "");
    
    const expectedHeaders: string[] = ['Product', 'Vendor', 'Unit Price', 'Sold', 'Date Uploaded'];
    
    expect(actualHeaders).toEqual(expectedHeaders);    
  
  });
  

  test('Search for a product and validate the results', async ({ page }) => {
    await page.locator('a[href="/admin/products"]').click();
    await expect(page).toHaveURL('http://localhost:3100/admin/products');

   
    const searchBar = page.locator('input[placeholder="Search by products name"]'); 
    await searchBar.fill('spray'); 
    await searchBar.press('Enter');
    await page.waitForLoadState('networkidle'); 

    const productNames = await page.locator('//table/tbody/tr/td[2]').allTextContents(); 
    console.log(productNames);
    expect(productNames.length).toBeGreaterThan(0);
    productNames.forEach((name) => {
      expect(name.toLowerCase()).toContain('spray');
    });
  });


  test('Navigate between product pages using pagination', async ({ page }) => {
    await page.locator('a[href="/admin/products"]').click();
    await expect(page).toHaveURL('http://localhost:3100/admin/products');

    const paginationContainer = page.locator('div.tw-flex.tw-justify-between.tw-align-center.tw-gap-1');
    const buttons = paginationContainer.locator('button');
  
    const buttonCount = await buttons.count();
  
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
  
      const isDisabled = await button.isDisabled();
      if (!isDisabled) {
      
        const pageNumber = await button.innerText();
        console.log(`Navigating to page ${pageNumber}`);
        await button.click();
        const activeButton = paginationContainer.locator(
          'button.tw-bg-[#AF1328].tw-text-white-400[disabled]'
        );
        await expect(activeButton).toHaveText(pageNumber);
      }
    }
  });
});
