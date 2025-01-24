import { test, expect } from '@playwright/test';

function generateRandomEmail() {
  const timestamp = Date.now();
  return `user${timestamp}@test.com`;
}

function generateSecurePassword() {
  return 'Secure1@' + Date.now(); // Ensures it has uppercase, lowercase, number, and special character
}

test.describe('Sign Up Page', () => {
  test('should render all UI elements on Sign Up page', async ({ page }) => {
    await page.goto('http://localhost:3100/create-account', { waitUntil: 'networkidle' });

    // Validate the UI elements
    await expect(page.getByPlaceholder('Full Name')).toBeVisible();
    await expect(page.getByPlaceholder('Email Address')).toBeVisible({ timeout: 30000 });
    await expect(page.getByPlaceholder('Password').nth(0)).toBeVisible(); // First 'Password' field
    await expect(page.getByPlaceholder('Password').nth(1)).toBeVisible(); // Second 'Password' field (Confirm Password)
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
  });

  test('should show validation error for empty fields', async ({ page }) => {
    await page.goto('http://localhost:3100/create-account');
    await page.getByRole('button', { name: 'Create Account' }).click();

    // Assert validation errors
    await expect(page.locator('text=Email field cannot be empty')).toBeVisible();
  });

  test('should successfully create an account with valid details', async ({ page }) => {
    await page.goto('http://localhost:3100/create-account');

    // Dynamically generate valid inputs
    const randomEmail = generateRandomEmail();
    const securePassword = generateSecurePassword();

    // Fill out the sign-up form
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Test User');
    await page.getByPlaceholder('Email Address').fill(randomEmail);
    await page.getByPlaceholder('Password').nth(0).fill(securePassword);
    await page.getByPlaceholder('Password').nth(1).fill(securePassword);

    // Submit the form
    await page.getByRole('button', { name: 'Create Account' }).click();

    // // Verify the redirect to the Email Verification page
    await expect(page).toHaveURL('http://localhost:3100/create-account?next_page=', { timeout: 40000 }); // URL contains 'verify-email'
    await expect(page.locator('h1')).toHaveText('Verify your email to finish signing up to Kwek');
    await expect(page.locator('text=Check your email inbox')).toBeVisible();
  });
});
