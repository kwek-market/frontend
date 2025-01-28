import { test, expect } from '@playwright/test';
import { login } from '../utils/sellerloginHelper';

test.describe('Product Navigation', () => {
  test('Login and navigate to product page', async ({ page }) => {
    // Reuse the login step
    await login(page);
    console.log('Successfully logged in.');

   // Locate and click "New Product"
   const urlButton = page.locator('button.tw-rounded-sm.tw-bg-yellow-filled:has-text("New Product")');
   await urlButton.waitFor({ state: 'visible', timeout: 60000 }); // Wait for up to 60 seconds
   await urlButton.click();

   // Step 6: Verify navigation to the "Upload New Product" page
  await expect(page).toHaveURL('http://localhost:3100/seller/upload-new-product', { timeout: 10000 });

    // Select a category from the dropdown
  const dropdown = page.locator('select'); // Adjust the selector if needed
  await dropdown.click();

  // Step 3: Select "Electronics" from the dropdown
  await dropdown.selectOption({ label: 'Electronics' });

  // Step 4: Verify the selection
  await expect(dropdown).toHaveValue('Electronics');

    // Upload a product image
    const uploadInput = page.locator('#uploadImageButton');
    await uploadInput.setInputFiles('../images/test.avif'); // Replace with your test image file path
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
