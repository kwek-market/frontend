import { test, expect } from "@playwright/test";

test.describe("Header Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage
    await page.goto("http://localhost:3100");
  });

  test("Logo should navigate to the homepage", async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:3100');
    
    // Target the specific logo element
    const logo = page.locator('img[alt="kweklogo"]').nth(0);
  
    // Ensure the logo is visible before interacting
    await expect(logo).toBeVisible({ timeout: 60000 });
  
    // Click on the logo
    await logo.click();
  
    // Assert the page URL is the homepage
    await expect(page).toHaveURL("http://localhost:3100");
  });
  
  

  

  test("Search bar should allow input and display results", async ({ page }) => {
    const searchBar = page.locator('input[placeholder="I\'m searching for..."]');
    const searchButton = page.locator('button:has-text("Search")');
  
    // Type into the search bar
    await searchBar.fill("Test Query");
  
    // Click the search button
    await searchButton.click();
  
    // Wait for dynamic content to update
    const noResultsMessage = page.locator('text=No items found');
    await expect(noResultsMessage).toBeVisible({ timeout: 30000 });
  
    // Optionally verify other search result updates if needed
    // Example: await expect(page.locator('text=Expected Result')).toBeVisible();
  });
  


test("Wishlist icon should navigate to wishlist page", async ({ page }) => {
  // Find the element with the text 'saved' and click on it
  const savedLink = page.locator('text=saved');
  await savedLink.waitFor({ state: 'visible', timeout: 30000 }); // Ensure the element is visible
  await savedLink.click({ timeout: 30000 });

  // Assert the page URL is the wishlist page
  await expect(page).toHaveURL("http://localhost:3100/wishlist");

  // Pause the test to keep the browser open
//   await page.pause();
});
  
  test("Cart icon should navigate to cart page", async ({ page }) => {
    // Click on the cart icon
    const cartLink = page.locator('text=cart');
    await cartLink.waitFor({ state: 'visible', timeout: 30000 }); // Ensure the element is visible
    await cartLink.click({ timeout: 30000 });
  
    // Assert the page URL is the cart page
    await expect(page).toHaveURL("http://localhost:3100/cart");
  
    // Pause the test to keep the browser open
    await page.pause();
  });

  test("Shortcut items should have correct counters", async ({ page }) => {
    // Check the wishlist counter
    const wishlistCounter = page.locator('a[href="/wishlist"] .tw-absolute');
    await expect(wishlistCounter).toHaveText("0");

    // Check the cart counter
    const cartCounter = page.locator('a[href="/cart"] .tw-absolute');
    await expect(cartCounter).toHaveText("0");
  });

  test("Sign In link should navigate to login page", async ({ page }) => {
    // Click on the Sign In link
    const signInLink = page.locator('a[href="/login"]');
    await signInLink.click();

    // Assert the page URL is the login page
    await expect(page).toHaveURL("http://localhost:3100/login");
  });
});
