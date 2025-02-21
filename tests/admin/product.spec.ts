import { test, expect } from '@playwright/test';
import { login } from '../utils/adminloginHelper';

test.describe('Order Navigation', () => {
  test('Login and navigate to orders page', async ({ page }) => {
    // Reuse the login step
    await login(page);

    // Locate and click the "Order" tab
    const ordersButton = page.locator('div.tw-cursor-pointer:has-text("Products")');
    await ordersButton.waitFor({ state: 'visible', timeout: 30000 });
    await ordersButton.scrollIntoViewIfNeeded();
    await ordersButton.click();
  

  
    // Wait for the product table to load
    const productTable = page.locator('table');
    await productTable.waitFor({ state: 'visible', timeout: 80000 });

    // Locate all rows in the product table's tbody
    const rows = productTable.locator('tbody tr');
    const rowCount = await rows.count();
    console.log(`Found ${rowCount} rows in the product table`);

    // Iterate over each row and extract data
    // Note: Since the first column is the checkbox, data starts at td:nth-child(2)
    for (let i = 0; i < rowCount; i++) {
      const product     = await rows.nth(i).locator('td:nth-child(2)').textContent();
      const vendor      = await rows.nth(i).locator('td:nth-child(3)').textContent();
      const unitPrice   = await rows.nth(i).locator('td:nth-child(4)').textContent();
      const sold        = await rows.nth(i).locator('td:nth-child(5)').textContent();
      const dateUploaded = await rows.nth(i).locator('td:nth-child(6)').textContent();

      // Log the extracted data
      console.log({
        product: product?.trim(),
        vendor: vendor?.trim(),
        unitPrice: unitPrice?.trim(),
        sold: sold?.trim(),
        dateUploaded: dateUploaded?.trim(),
      });

      // Validate that none of these fields are null or undefined
      expect(product).not.toBeNull();
      expect(vendor).not.toBeNull();
      expect(unitPrice).not.toBeNull();
      expect(sold).not.toBeNull();
      expect(dateUploaded).not.toBeNull();

      // Example: You can add further validations such as checking the format of the date,
      // the numeric value of the price, etc.
    }
  });
});
