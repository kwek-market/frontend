import { test, expect } from '@playwright/test';
import { login } from '../utils/sellerloginHelper'; // Adjust the path based on your project structure

test.describe('Review Navigation', () => {
  test('Login and navigate to review page', async ({ page }) => {
    // Step 1: Login to the application
    await login(page);

    // Step 2: Locate the "Reviews" navigation button
    const reviewsButton = page.locator('div[role="tab"]:has-text("Reviews")');
    await reviewsButton.waitFor({ state: 'visible', timeout: 30000 }); // Reasonable timeout
    await reviewsButton.scrollIntoViewIfNeeded();
    await reviewsButton.click();
    // Wait for the "Reviews" button to be visible
    await reviewsButton.waitFor({ state: 'visible', timeout: 80000 });

    // Ensure the button is accessible
    await reviewsButton.scrollIntoViewIfNeeded();

    // Click the "Reviews" button to navigate
    await reviewsButton.click();

    // Step 3: Wait for the reviews page to load
    const reviewsHeader = page.locator('h1:has-text("Reviews")');
    await reviewsHeader.waitFor({ state: 'visible', timeout: 10000 });

    // // Step 4: Validate that the reviews page loaded successfully
    // await expect(reviewsHeader).toBeVisible();
    // await expect(reviewsHeader).toHaveText('Reviews');

    // Step 5: Validate the presence of "Store Performance" section
    const storePerformanceHeader = page.locator('h4:has-text("Store Performance")');
    await expect(storePerformanceHeader).toBeVisible();

    // Log success message for debugging
    console.log('Successfully navigated to the Reviews page.');
  });
});
