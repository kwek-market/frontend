// utils/helpers.ts

import { Page } from '@playwright/test';

export class AuthHelpers {
  static async signIn(page: Page, email: string, password: string) {
    await page.goto('/login'); // Update with the actual Sign In page URL
    await page.getByPlaceholder('Email Address').fill(email);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();
  }

  static async signUp(page: Page, fullName: string, email: string, password: string) {
    await page.goto('/create-account'); // Update with the actual Sign Up page URL
    await page.getByPlaceholder('Full Name').fill(fullName);
    await page.getByPlaceholder('Email Address').fill(email);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByPlaceholder('Confirm Password').fill(password);
    await page.getByRole('button', { name: 'Create Account' }).click();
  }
}
