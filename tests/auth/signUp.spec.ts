
import { test, expect } from '@playwright/test';
import { AuthHelpers } from '../utils/helpers';

test.describe('Sign Up Page', () => {
  test('should render all UI elements on Sign Up page', async ({ page }) => {
    await page.goto('http://localhost:3100/create-account' , { waitUntil: 'networkidle' });

    // Validate the UI elements
    await expect(page.getByPlaceholder('Full Name')).toBeVisible();
    await expect(page.getByPlaceholder('Email Address')).toBeVisible({ timeout: 30000 });
    await expect(page.getByPlaceholder('Password').nth(0)).toBeVisible(); // First 'Password' field
    await expect(page.getByPlaceholder('Password').nth(1)).toBeVisible(); // Second 'Password' field (Confirm Password)
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();
    // Flexible and specific targeting for "Login"
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
  });

  test('should show validation error for empty fields', async ({ page }) => {
    await page.goto('http://localhost:3100/create-account');
    await page.getByRole('button', { name: 'Create Account' }).click();

    // Assert validation errors
    await expect(page.locator('text=Email field cannot be empty')).toBeVisible();
  });

  test('should successfully create an account with valid details', async ({ page }) => {
    await page.goto('http://localhost:3100/login'); 

    
    // Fill out the sign-up form
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Test User');

    // await page.getByPlaceholder('Full Name').fill('Test User' , { timeout: 50000 });
    await page.getByPlaceholder('Email Address').fill('gefrauxuseni-5978@yopmail.com');
    await page.getByPlaceholder('Password').nth(0).fill('Password123@');
    await page.getByPlaceholder('Password').nth(1).fill('Password123@');

    // Submit the form
    await page.getByRole('button', { name: 'Create Account' }).click();

    // Verify the redirect to the Email Verification page
    await expect(page).toHaveURL(/.*verify-email/ , { timeout: 10000 }); // URL contains 'verify-email'
    await expect(page.locator('h1')).toHaveText('Verify Your Email');
    await expect(page.locator('text=Check your email inbox')).toBeVisible();
  });
});
