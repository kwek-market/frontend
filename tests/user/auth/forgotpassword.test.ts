import { test, expect } from '@playwright/test';
test.describe('Forgot Password Page', () => {
  test('should render all UI elements on Forgot Password page', async ({ page, baseURL }) => {
    // Navigate to the Sign In page
    await page.goto(`${baseURL}/forgot-password`);

    // Validate the UI elements
    await expect(page.getByPlaceholder('email address')).toBeVisible();

     // Click Next without filling out fields
     await page.getByRole('button', { name: 'Request Reset Link' }).click();
     // Validate error message
     await expect(page.getByText('Enter your email')).toBeVisible();
  });

});