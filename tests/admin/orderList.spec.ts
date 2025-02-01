import { test, expect } from '@playwright/test';
import { login } from '../utils/adminloginHelper';

test.describe('Order Navigation', () => {
  test('Login and navigate to orders page', async ({ page }) => {
    // Reuse the login step
    await login(page);

    // Locate and click the "Order" tab
    const ordersButton = page.locator('div.tw-cursor-pointer:has-text("Orders")');
    await ordersButton.waitFor({ state: 'visible', timeout: 30000 });
    await ordersButton.scrollIntoViewIfNeeded();
    await ordersButton.click();

    // Wait for the order table to be visible
  const orderTable = page.locator('.ant-table');
  await orderTable.waitFor({ state: 'visible', timeout: 80000 });

  // Locate all rows in the table body (tbody) with a timeout
  const rows = orderTable.locator('tbody tr');
  await rows.first().waitFor({ state: 'visible', timeout: 80000 }); // Wait for at least one row to be visible
  const rowCount = await rows.count();
  console.log(`Found ${rowCount} rows in the order table`);

  // Iterate through each row and extract data with timeouts
  for (let i = 0; i < rowCount; i++) {
    const row = rows.nth(i);

  // Add a timeout for each cell extraction
  const orderNumber = await row.locator('th:nth-child(1)').textContent({ timeout: 80000 });
  const orderDate = await row.locator('th:nth-child(2)').textContent({ timeout: 80000 });
  const paymentMethod = await row.locator('th:nth-child(3)').textContent({ timeout: 80000 });
  const status = await row.locator('th:nth-child(4)').textContent({ timeout: 80000 });
  const amount = await row.locator('th:nth-child(5)').textContent({ timeout: 80000 });
  const payment = await row.locator('th:nth-child(6)').textContent({ timeout: 80000 });


  console.log(`Row ${i + 1}:`, { orderNumber, orderDate, paymentMethod, status, amount, payment });


      // // Log the extracted data
      // console.log({
      //   orderNumber: orderNumber?.trim(),
      //   orderDate: orderDate?.trim(),
      //   paymentMethod: paymentMethod?.trim(),
      //   status: status?.trim(),
      //   amount: amount?.trim(),
      //   payment: payment?.trim(),
      // });

      // Validate that none of these fields are null or undefined
      expect(orderNumber).not.toBeNull();
      expect(orderDate).not.toBeNull();
      expect(paymentMethod).not.toBeNull();
      expect(status).not.toBeNull();
      expect(amount).not.toBeNull();
      expect(payment).not.toBeNull();

      // Optionally, add further validations here
      // For example, to validate the "Payment" field:
      // expect(payment?.trim()).toBe('Paid');
    }
  });
});