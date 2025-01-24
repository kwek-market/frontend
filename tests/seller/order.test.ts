import { test, expect } from '@playwright/test';
import { login } from '../../utils/sellerloginHelper'; // Adjust the path based on your project structure

test.describe('Order Navigation', () => {
  test('Login and navigate to orders page', async ({ page }) => {
    // Reuse the login step
    await login(page);

    // Continue with order-specific steps
    // Navigate to "Orders" page
    const ordersButton = page.locator('nav a:has-text("Orders")');
    await ordersButton.waitFor({ state: 'visible', timeout: 80000 });
    await ordersButton.scrollIntoViewIfNeeded();
    await ordersButton.click();

    // Verify navigation to the orders page
    await expect(page).toHaveURL('http://localhost:3100/seller/profile', { timeout: 80000 });
  });
});
