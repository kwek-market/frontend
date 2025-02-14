import { test, expect } from '@playwright/test';
import { login } from '../utils/sellerloginHelper';

test.describe('Product Navigation', () => {
  test('Login and navigate to product page', async ({ page, baseURL }) => {
    // Reuse the login step
    await login(page);
    console.log('Successfully logged in.');

    // Locate and click "New Product"
    const urlButton = page.locator('button.tw-rounded-sm.tw-bg-yellow-filled:has-text("New Product")');
    await urlButton.waitFor({ state: 'visible', timeout: 60000 }); // Wait for up to 60 seconds
    await urlButton.click();

    // Step 6: Verify navigation to the "Upload New Product" page
    await expect(page, baseURL).toHaveURL(`${baseURL}/seller/upload-new-product`, { timeout: 10000 });

    // Verify the main container for product category
    const productCategoryContainer = page.locator('div.tw-pt-3.tw-px-5.tw-pb-20.tw-mb-5.tw-bg-white-100.tw-rounded-md');
    await expect(productCategoryContainer).toBeVisible();

    // Verify the "Product Category" title
    const productCategoryTitle = page.locator('p.tw-font-semibold.tw-capitalize.tw-text-lg.tw-mb-0');
    await expect(productCategoryTitle).toHaveText('product category');

    // Verify the "Main Category" dropdown
    const mainCategoryLabel = page.locator('label', { hasText: 'Main Category' });
    await expect(mainCategoryLabel).toBeVisible();
    const mainCategoryDropdown = page.locator('select.tw-w-full.tw-rounded-md.tw-border-gray-kwek100.tw-border-1.tw-mt-2');
    await expect(mainCategoryDropdown).toBeVisible();
    await expect(mainCategoryDropdown).toHaveValue('');

    // Select a main category
    await mainCategoryDropdown.selectOption({ value: '78f5a8eb-63fa-4f6d-b9a4-f0fd7300f628' }); // Selecting "Electronics"
    await expect(mainCategoryDropdown).toHaveValue('78f5a8eb-63fa-4f6d-b9a4-f0fd7300f628');

    // Verify the product image upload section
    const productImageContainer = page.locator('div.tw-pt-3.tw-px-5.tw-pb-20.tw-mb-5.tw-bg-white-100.tw-rounded-md').nth(1);
    await expect(productImageContainer).toBeVisible();

    // Verify the "Product Image" title and description
    const productImageTitle = page.locator('p.tw-font-semibold.tw-capitalize.tw-text-lg.tw-mb-0', { hasText: 'product image 0/5' });
    await expect(productImageTitle).toBeVisible();
    const productImageDescription = page.locator('p.tw-text-gray-kwek200.tw-text-sm.md:tw-text-base.tw-font-normal.tw-mb-0');
    await expect(productImageDescription).toHaveText('Recommended Image dimension is 500px by 500px, Image should not be larger than 2.5mb');

    // Verify the "Upload Image(s)" button
    const uploadImageButton = page.locator('button.tw-text-error');
    await expect(uploadImageButton).toBeVisible();

    // Verify the image upload area
    const dragDropText = page.locator('p', { hasText: 'Drag and Drop, or click to Add Image' });
    await expect(dragDropText).toBeVisible();
    const maxFileSizeText = page.locator('p', { hasText: 'Maximum file size (2 Megabyte) Orientation (square, 1:1)' });
    await expect(maxFileSizeText).toBeVisible();

    // Interact with the file upload input
    const fileUploadInput = page.locator('input#id-upload');
    await expect(fileUploadInput).toBeVisible();

    // Upload an image file
    await fileUploadInput.setInputFiles('path/to/your/image.jpg');

    // Verify the image upload count updates
    const updatedProductImageTitle = page.locator('p.tw-font-semibold.tw-capitalize.tw-text-lg.tw-mb-0', { hasText: 'product image 1/5' });
    await expect(updatedProductImageTitle).toBeVisible();

    // Verify the main container for product details
    const productDetailsContainer = page.locator('div.tw-pt-3.tw-px-5.tw-pb-20.tw-mb-5.tw-bg-white-100.tw-rounded-md');
    await expect(productDetailsContainer).toBeVisible();

    // Verify the "Product Options" title
    const productOptionsTitle = page.locator('p.tw-font-semibold.tw-capitalize.tw-text-lg.tw-mb-0');
    await expect(productOptionsTitle).toHaveText('product options');

    // Verify the size dropdown
    const sizeLabel = page.locator('label', { hasText: 'Size (Optional)' });
    await expect(sizeLabel).toBeVisible();
    const sizeDropdown = page.locator('select[name="sizePostfix"]');
    await expect(sizeDropdown).toBeVisible();
    await sizeDropdown.selectOption({ value: 'M' });
    await expect(sizeDropdown).toHaveValue('M');

    // Verify the "Use Letter" and "Use Number" buttons
    const useLetterButton = page.locator('button', { hasText: 'use Letter' });
    await expect(useLetterButton).toBeVisible();
    const useNumberButton = page.locator('button', { hasText: 'use Number' });
    await expect(useNumberButton).toBeVisible();

    // Verify the color input
    const colorInput = page.locator('input[name="color"]');
    await expect(colorInput).toBeVisible();
    await colorInput.fill('blue');
    await expect(colorInput).toHaveValue('blue');

    // Verify the quantity input
    const quantityInput = page.locator('input[name="quantity"]');
    await expect(quantityInput).toBeVisible();
    await quantityInput.fill('10');
    await expect(quantityInput).toHaveValue('10');

    // Verify the price input
    const priceInput = page.locator('input[name="price"]');
    await expect(priceInput).toBeVisible();
    await priceInput.fill('50');
    await expect(priceInput).toHaveValue('50');

    // Verify the discounted price input
    const discountPriceInput = page.locator('input[name="discountPrice"]');
    await expect(discountPriceInput).toBeVisible();
    await discountPriceInput.fill('40');
    await expect(discountPriceInput).toHaveValue('40');

    // Verify the total price input
    const totalPriceInput = page.locator('input[name="totalPrice"]');
    await expect(totalPriceInput).toBeVisible();
    await expect(totalPriceInput).toBeDisabled();

    // Verify the "Add new variant" button
    const addNewVariantButton = page.locator('button', { hasText: 'Add new variant' });
    await expect(addNewVariantButton).toBeVisible();

    // Verify the "Done" button
    const doneButton = page.locator('button', { hasText: 'done' });
    await expect(doneButton).toBeVisible();

    // Interact with the "Add new variant" button
    await addNewVariantButton.click();
    // Add additional assertions or interactions as needed after clicking the button

    // Interact with the "Done" button
    await doneButton.click();

    // Verify the main container for other options
    const otherOptionsContainer = page.locator('div.tw-pt-3.tw-px-5.tw-pb-20.tw-mb-5.tw-bg-white-100.tw-rounded-md');
    await expect(otherOptionsContainer).toBeVisible();

    // Verify the "Other Options" title
    const otherOptionsTitle = page.locator('p.tw-font-semibold.tw-capitalize.tw-text-lg.tw-mb-0');
    await expect(otherOptionsTitle).toHaveText('other options');

    // Verify the return policy dropdown
    const returnPolicyLabel = page.locator('label', { hasText: 'return policy (Optional)' });
    await expect(returnPolicyLabel).toBeVisible();
    const returnPolicyDropdown = page.locator('select', { hasText: 'no return policy' });
    await expect(returnPolicyDropdown).toBeVisible();
    await returnPolicyDropdown.selectOption({ value: 'yes' });
    await expect(returnPolicyDropdown).toHaveValue('yes');

    // Verify the warranty dropdown
    const warrantyLabel = page.locator('label', { hasText: 'warranty (Optional)' });
    await expect(warrantyLabel).toBeVisible();
    const warrantyDropdown = page.locator('select', { hasText: 'No warranty' });
    await expect(warrantyDropdown).toBeVisible();
    await warrantyDropdown.selectOption({ value: '1 year' });
    await expect(warrantyDropdown).toHaveValue('1 year');

    // Verify the color input in the "Other Options" section
    const colorInputOtherOptions = page.locator('input[placeholder="what is the color of this item?"]');
    await expect(colorInputOtherOptions).toBeVisible();
    await colorInputOtherOptions.fill('red, blue, green');
    await expect(colorInputOtherOptions).toHaveValue('red, blue, green');

    // Verify the gender dropdown
    const genderLabel = page.locator('label', { hasText: 'gender (Optional)' });
    await expect(genderLabel).toBeVisible();
    const genderDropdown = page.locator('select', { hasText: 'Male' });
    await expect(genderDropdown).toBeVisible();
    await genderDropdown.selectOption({ value: 'female' });
    await expect(genderDropdown).toHaveValue('female');

    // Verify the main container for search engine optimization
    const seoContainer = page.locator('div.tw-pt-3.tw-px-5.tw-pb-20.tw-bg-white-100.tw-rounded-md');
    await expect(seoContainer).toBeVisible();

    // Verify the "Search Engine Optimization" title
    const seoTitle = page.locator('p.tw-font-semibold.tw-capitalize.tw-text-lg.tw-mb-0', { hasText: 'search engine optimization' });
    await expect(seoTitle).toBeVisible();

    // Verify the keywords input
    const keywordsInput = page.locator('input.ant-select-selection-search-input');
    await expect(keywordsInput).toBeVisible();
    await keywordsInput.fill('shoes, bags, accessories');
    await expect(keywordsInput).toHaveValue('shoes, bags, accessories');

    // Verify the "Save Item" button
    const saveItemButton = page.locator('button', { hasText: 'save item' });
    await expect(saveItemButton).toBeVisible();

    // Interact with the "Save Item" button
    await saveItemButton.click();
  });
});