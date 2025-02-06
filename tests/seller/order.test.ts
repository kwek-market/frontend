import { test, expect } from '@playwright/test';
import { login } from '../utils/sellerloginHelper';

test.describe('Order Navigation', () => {
  test('Login and navigate to orders page', async ({ page }) => {
    // Reuse the login step
    await login(page);

    // Navigate to "Order" page
const ordersButton = page.locator('div[role="tab"]:has-text("Order")');
await ordersButton.waitFor({ state: 'visible', timeout: 30000 }); // Use a reasonable timeout
await ordersButton.scrollIntoViewIfNeeded();
await ordersButton.click();

    // Wait for the orders page to load
    const orderTable = page.locator('table'); // Assuming orders are displayed in a table
    await orderTable.waitFor({ state: 'visible', timeout: 80000000 });

    // Locate all rows in the table
    const rows = orderTable.locator('tbody tr');
    const rowCount = await rows.count();

    console.log(`Found ${rowCount} rows in the order table`);

    // Iterate through each row and extract data
    for (let i = 0; i < rowCount; i++) {
      const orderId = await rows.nth(i).locator('td:nth-child(1)').textContent();
      const orderDate = await rows.nth(i).locator('td:nth-child(2)').textContent();
      const customerName = await rows.nth(i).locator('td:nth-child(3)').textContent();
      const paymentStatus = await rows.nth(i).locator('td:nth-child(4)').textContent();
      const orderStatus = await rows.nth(i).locator('td:nth-child(5)').textContent();
      const trackOrder = await rows.nth(i).locator('td:nth-child(6)').textContent();

      // Log the extracted data
      console.log({
        orderId: orderId?.trim(),
        orderDate: orderDate?.trim(),
        customerName: customerName?.trim(),
        paymentStatus: paymentStatus?.trim(),
        orderStatus: orderStatus?.trim(),
        trackOrder: trackOrder?.trim(),
      });

      // Validate that none of these fields are null or undefined
      expect(orderId).not.toBeNull();
      expect(orderDate).not.toBeNull();
      expect(customerName).not.toBeNull();
      expect(paymentStatus).not.toBeNull();
      expect(orderStatus).not.toBeNull();
      expect(trackOrder).not.toBeNull();

      // Example validation for the "Track Order" button text
      expect(trackOrder).toBe('Track Order');
    }
  });
});
