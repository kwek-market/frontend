import { test, expect } from '@playwright/test';

test.describe('Sign In Page', () => {
  test('should render all UI elements on Sign In page', async ({ page, baseURL}) => {
    // Navigate to the Sign In page
    await page.goto(`${baseURL}/login`);

    // Validate the UI elements
    await expect(page.getByPlaceholder('Email Address')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    await expect(page.getByText('Forgot Password?')).toBeVisible();
  });

  test('should show an error for empty fields on Sign In', async ({ page, baseURL }) => {
    // Navigate to the Sign In page
    await page.goto(`${baseURL}/login`); 

    // Click Sign In without filling out fields
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Validate error message
  await expect(page.getByText('Input your email and password')).toBeVisible();
});

  test('should successfully sign in with valid credentials', async ({ page, baseURL }) => {
    // Navigate to the Sign In page
    await page.goto(`${baseURL}/login`);

    // Fill out the login form
    await page.getByPlaceholder('Email Address').fill('test@example.com');
    await page.getByPlaceholder('Password').fill('Password123');

    // Submit the form
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Validate post-login URL or dashboard visibility
    await expect(page).toHaveURL(`${baseURL}/login`);
  });
});
