import { test, expect } from '@playwright/test';
import { login } from '../utils/sellerloginHelper';

test.describe('Product Navigation', () => {
  test('Login and navigate to product page', async ({ page }) => {
    // Reuse the login step
    await login(page);
    console.log('Successfully logged in.');

    // Step 4: Locate and click the "Shop" button
    const shopButton = page.locator('text=Shop');
    await shopButton.waitFor({ state: 'visible', timeout: 10000 });
    await shopButton.scrollIntoViewIfNeeded();
    await shopButton.click();

    console.log('Successfully navigated to the "Shop" section.');

    // Step 5: Navigate to the "Upload New Product" page
    await page.goto('/seller/upload-new-product');
    await page.waitForSelector('#productUploadForm'); // Wait for the product upload form to load
    console.log('Successfully navigated to the "Upload New Product" page.');

    // Step 6: Fill the product upload form
    // Select a category from the dropdown
    await page.click('#productCategoryDropdown');
    const categories = page.locator('.dropdown-menu li');
    expect(await categories.count()).toBeGreaterThan(0);
    await categories.nth(1).click(); // Replace with the desired category index
    const selectedCategory = await page.locator('#selectedCategory').textContent();
    console.log(`Selected category: ${selectedCategory}`);

    // Upload a product image
    const uploadInput = page.locator('#uploadImageButton');
    await uploadInput.setInputFiles('path/to/test-image.jpg'); // Replace with your test image file path
    const uploadedImages = page.locator('.uploaded-image');
    expect(await uploadedImages.count()).toBe(1); // Validate the image upload
    console.log('Image uploaded successfully.');

    // Fill out other product details
    await page.fill('#brandInput', 'TestBrand');
    await page.fill('#productTitle', 'Test Product');
    await page.fill('#productWeight', '5');
    await page.fill('#shortDescription', 'This is a short description for the test product.');

    console.log('Filled out product details.');

    // Step 7: Submit the form
    await page.click('#submitButton');
    await page.waitForSelector('.success-message'); // Wait for a success message or confirmation
    const successMessage = await page.locator('.success-message').textContent();
    expect(successMessage).toContain('Product uploaded successfully');
    console.log(successMessage);

    console.log('Product upload completed successfully.');
  });
});
