  import { test, expect } from '@playwright/test';
  import { login } from '../utils/sellerloginHelper';

    test.describe('Product Navigation', () => {
        test('Login and navigate to product page', async ({ page }) => {
        // Reuse the login step
        await login(page);
        //
        const settingsButton = page.locator('div[role="tab"]:has-text("Settings")');
        await expect(settingsButton).toBeVisible({timeout: 80000}); 
        await settingsButton.click();   

    // Verify the main container
    const settingsContainer = page.locator('section.tw-mt-4.tw-p-4.tw-bg-white-100.tw-shadow-md.tw-border.tw-border-gray-kwek700.tw-rounded-md');
    await expect(settingsContainer).toBeVisible();

    // Verify the "Settings" title
    const settingsTitle = page.locator('p.tw-capitalize.tw-font-semibold.tw-text-lg.tw-text-gray-kwek900');
    await expect(settingsTitle).toHaveText('Settings');

    // Verify the tabs
    const personalDetailsTab = page.locator('div.ant-tabs-tab-active', { hasText: 'Personal Details' });
    await expect(personalDetailsTab).toBeVisible();
    const storeTab = page.locator('div.ant-tabs-tab', { hasText: 'Store' });
    await expect(storeTab).toBeVisible();

    // Switch to the "Store" tab
    await storeTab.click();

    // Verify the "Upload Image" section
    const uploadImageButton = page.locator('button', { hasText: 'Upload Image' });
    await expect(uploadImageButton).toBeVisible();
    const productImageLabel = page.locator('h2', { hasText: 'Product Image' });
    await expect(productImageLabel).toBeVisible();
    const dropImageText = page.locator('p', { hasText: 'Drop image here' });
    await expect(dropImageText).toBeVisible();
    const chooseFileButton = page.locator('p', { hasText: 'choose file' });
    await expect(chooseFileButton).toBeVisible();
    const supportedFormatsText = page.locator('p', { hasText: 'Supported formats: JPG, PNG, JPEG. File size limit is 1MB' });
    await expect(supportedFormatsText).toBeVisible();

    // Verify the "Store Description" section
    const storeDescriptionLabel = page.locator('label', { hasText: 'Store Description' });
    await expect(storeDescriptionLabel).toBeVisible();
    const storeDescriptionTextarea = page.locator('textarea#storeDescription');
    await expect(storeDescriptionTextarea).toHaveValue('This is a description of my test store. MY STORE FOCUSES ON BAGS AND SHOES');

    // Verify the "Store URL" section
    const storeUrlLabel = page.locator('p', { hasText: 'Store Url' });
    await expect(storeUrlLabel).toBeVisible();
    const storeUrlPrefix = page.locator('div', { hasText: 'www.kwekmarket.com/store/' });
    await expect(storeUrlPrefix).toBeVisible();
    const storeUrlInput = page.locator('input#streetAddress');
    await expect(storeUrlInput).toHaveValue('Kwekstore');

    // Verify the "Store Location" section
    const storeLocationLabel = page.locator('p', { hasText: 'store location' });
    await expect(storeLocationLabel).toBeVisible();
    const streetAddressInput = page.locator('input#streetAddress');
    await expect(streetAddressInput).toHaveValue('Parakin Obalufe');

    // Verify the "Save Changes" buttons
    const saveChangesButtons = page.locator('button', { hasText: 'Save Changes' });
    await expect(saveChangesButtons).toHaveCount(2);

    // Interact with the "Upload Image" button
    await uploadImageButton.click();
    // Add additional assertions or interactions as needed after clicking the button

    // Example of changing the store description and saving changes
    const newStoreDescription = 'Updated store description focusing on bags and shoes.';
    await storeDescriptionTextarea.fill(newStoreDescription);
    await saveChangesButtons.first().click();
    await expect(storeDescriptionTextarea).toHaveValue(newStoreDescription);

    // Example of changing the store URL and saving changes
    const newStoreUrl = 'NewKwekstore';
    await storeUrlInput.fill(newStoreUrl);
    await saveChangesButtons.nth(1).click();
    await expect(storeUrlInput).toHaveValue(newStoreUrl);
        });
        });


 

