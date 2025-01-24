import { test, expect } from "@playwright/test";

test.describe('Navbar Navigation Links Tests', () => {
    const TIMEOUT = 60000;  
  
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3100/', { timeout: TIMEOUT });
    });
  
    test('should navigate to correct page when clicking "Shop" navbar link', async ({ page }) => {
        const shopLink = page.locator('nav').getByRole('link', { name: 'Shop' });
        await expect(shopLink).toBeVisible({ timeout: TIMEOUT });
        await shopLink.click({ timeout: TIMEOUT });
        await expect(page).toHaveURL('http://localhost:3100/seller/profile', { timeout: TIMEOUT });
      });
    test('should navigate to correct page when clicking "About Us" navbar link', async ({ page }) => {
        const aboutUsLink = page.locator('nav a.Navbar_nav_link__i6Yvx:has-text("About Us")');
        await expect(aboutUsLink).toBeVisible({ timeout: TIMEOUT });
        await aboutUsLink.click({ timeout: TIMEOUT });
        await expect(page).toHaveURL('http://localhost:3100/aboutUs', { timeout: TIMEOUT });
      });
    
      test('should navigate to correct page when clicking "Contact Us" navbar link', async ({ page }) => {
        const contactUsLink = page.locator('nav a.Navbar_nav_link__i6Yvx:has-text("Contact Us")');
        
        // Ensure the link is visible and correct
        await expect(contactUsLink).toBeVisible({ timeout: TIMEOUT });
      
        // Click the link and wait for navigation
        await Promise.all([
          page.waitForNavigation({ timeout: TIMEOUT, waitUntil: 'load' }),
          contactUsLink.click({ timeout: TIMEOUT })
        ]);
      
        // Verify the final URL
        await expect(page).toHaveURL('http://localhost:3100/contact-us', { timeout: TIMEOUT });
      });
      
  
      test('should navigate to correct page when clicking "All Categories" navbar link', async ({ page }) => {
        const allCategoriesLink = page.locator('nav').getByRole('link', { name: 'All Categories' });
        await expect(allCategoriesLink).toBeVisible({ timeout: TIMEOUT });
        await allCategoriesLink.click({ timeout: TIMEOUT });
        await expect(page).toHaveURL('http://localhost:3100/all', { timeout: TIMEOUT });
      });
  });
  