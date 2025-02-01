import { test, expect } from '@playwright/test';
import { config } from '../utils/config';
import { loginAsNormalUser, switchToAdminUser } from '../utils/adminAuth';

test.describe('Random Row Validation in Order History Table', () => {
    test.beforeEach(async ({ page }) => {      
      await loginAsNormalUser(page); 
      await switchToAdminUser(page);
      await expect(page).toHaveURL(`${config.baseUrl}/admin/dashboard`, { timeout: 100000});
    });

    
   test('Navigating to order page',async ({page}) =>{
      await page.locator('a[href="/admin/orders"]').click();
      await expect(page).toHaveURL('http://localhost:3100/admin/orders'); 

      const customersHeading = page.locator('h1');
      await expect(customersHeading).toHaveText('Order List'); 
    });
    
    test('Pick a random order ID and search for it', async ({ page }) => {
      await page.locator('a[href="/admin/orders"]').click();
      await expect(page).toHaveURL('http://localhost:3100/admin/orders');  
    
      const rows = page.locator('tbody.ant-table-tbody tr.ant-table-row'); 
      const rowCount = await rows.count();
    
      expect(rowCount).toBeGreaterThan(0);
    
      const randomIndex = Math.floor(Math.random() * rowCount);
      const randomRow = rows.nth(randomIndex);
    
      const orderId = (await randomRow.locator('td:nth-child(1) a').textContent())?.trim(); 
      expect(orderId).toBeDefined(); 
    
      console.log(`Random Order ID Selected: ${orderId}`);
    
      const searchBar = page.locator('input[placeholder="Search by order id"]'); 
      await searchBar.fill(orderId!);
      await searchBar.press('Enter'); 
    
      const searchResults = page.locator('tbody.ant-table-tbody tr.ant-table-row'); 
      const searchResultCount = await searchResults.count();
    
      expect(searchResultCount).toBeGreaterThan(0); 
    
      for (let i = 0; i < searchResultCount; i++) {
        const resultOrderId = (await searchResults.nth(i).locator('td:nth-child(1) a').textContent())?.trim(); 
        expect(resultOrderId).toBe(orderId); 
        }
    
        console.log(`Search successful. Results match Order ID: ${orderId}`);
      });


    test.skip('Verify payment method and status for a randomly selected order', async ({ page }) => {
      await page.locator('a[href="/admin/orders"]').click();
      await expect(page).toHaveURL('http://localhost:3100/admin/orders');  

     
      await page.waitForSelector('table tbody tr', { state: 'visible', timeout: 5000 });

      const rows = page.locator('table tbody tr');
      const rowCount = await rows.count();

      if (rowCount === 0) {
        console.warn('No orders found in the table. Skipping test.');
      return; // Prevents failure when no data is present
      }
    
      expect(rowCount).toBeGreaterThan(0);

      const randomIndex = Math.floor(Math.random() * rowCount);
      const randomRow = rows.nth(randomIndex);

   
      const paymentMethod = (await randomRow.locator('td:nth-child(3)').textContent())?.trim(); 
      const status = (await randomRow.locator('td:nth-child(4)').textContent())?.trim(); 
      const payment = (await randomRow.locator('td:nth-child(6)').textContent())?.trim(); 

      if (paymentMethod === 'pay on delivery') {
          if (status === 'Order in progress') {
          expect(payment).toBe('Not Paid'); 
        } else if (status === 'delivered') {
          expect(payment).toBe('Paid'); 
        }
        
      } else if (paymentMethod === 'card') {
        expect(payment).toBe('Paid'); 
      } else {
       throw new Error(`Unexpected payment method: ${paymentMethod}`);
      }

      console.log(
          `Random Row Verified:
          - Payment Method: ${paymentMethod}
          - Status: ${status}
          - Payment: ${payment}`
       );
    });

    test.skip('Verify pagination functionality', async ({ page }) => {
      await page.locator('a[href="/admin/orders"]').click();
      await expect(page).toHaveURL('http://localhost:3100/admin/orders');  
    
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

  