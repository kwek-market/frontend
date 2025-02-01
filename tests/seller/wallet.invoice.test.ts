  import { test, expect } from '@playwright/test';
  import { login } from '../utils/sellerloginHelper';

  test.describe('Product Navigation', () => {
    test('Login and navigate to product page', async ({ page }) => {
      // Reuse the login step
      await login(page);
  
    
    // Locate and click the "Wallet" tab
    const walletButton = page.locator('div[role="tab"]:has-text("Wallet")');
    await expect(walletButton).toBeVisible({timeout: 80000}); // Ensure it's visible
      await walletButton.click();
    });
  
    test('Verify Wallet Page - New Invoice', async ({ page }) => {
        // Navigate to the Wallet Page
        await page.goto('your-wallet-page-url');
        console.log('Navigated to Wallet Page.');
      
        // Ensure the page has fully loaded
        await page.waitForLoadState('networkidle');
      
        // Wait for Store Name input to be visible
        const storeNameInput = page.locator('input[placeholder="Coco’s Store"]');
        await storeNameInput.waitFor({ state: 'visible' }); // Wait explicitly
        await expect(storeNameInput).toHaveValue('Kwekstore');
        console.log('Store Name verified.');
      
        // Verify Store Email
        const storeEmailInput = page.locator('input[placeholder="cocostore@example.com"]').first();
        await storeEmailInput.waitFor({ state: 'visible' });
        await expect(storeEmailInput).toHaveValue('afuyejames@gmail.com');
        console.log('Store Email verified.');
      
        // Verify Store Address
        const storeAddressInput = page.locator('input[placeholder="150 Elgin Street, Ottawa, Iyana Ipaja, Lagos, Nigeria."]');
        await storeAddressInput.waitFor({ state: 'visible' });
        await expect(storeAddressInput).toHaveValue('Parakin Obalufe');
        console.log('Store Address verified.');
    });

    test('Interact with Customer Details Section', async ({ page }) => {
      // Interact with Customer Details Section
      const customerNameInput = await page.locator('input[placeholder="Coco’s Store"]').last();
      await customerNameInput.fill('Coco\'s Store');
      console.log('Customer Name entered.');
    
      const customerEmailInput = await page.locator('input[placeholder="cocostore@example.com"]').nth(1);
      await customerEmailInput.fill('cocostore@example.com');
      console.log('Customer Email entered.');
    
      const customerAddressInput = await page.locator('input[placeholder="150 Elgin Street, Ottawa, Iyana Ipaja, Lagos, Nigeria."]').nth(1);
      await customerAddressInput.fill('150 Elgin Street, Ottawa, Iyana Ipaja, Lagos, Nigeria.');
      console.log('Customer Address entered.');
    
      // Validate Customer Details Input
      await expect(customerNameInput).toHaveValue('Coco\'s Store');
      await expect(customerEmailInput).toHaveValue('cocostore@example.com');
      await expect(customerAddressInput).toHaveValue('150 Elgin Street, Ottawa, Iyana Ipaja, Lagos, Nigeria.');
      console.log('Customer Details verified.');
    });
  });
