import { test, expect } from '@playwright/test';
import { login } from '../utils/sellerloginHelper';

test.describe('Product Navigation', () => {
  test('Login and navigate to product page', async ({ page }) => {
    // Reuse the login step
    await login(page);
    // Locate and click the "Products" tab
  const productButton = page.locator('div[role="tab"]:has-text("Products")');
  await productButton.waitFor({ state: 'visible', timeout: 80000 });
  await productButton.scrollIntoViewIfNeeded(); 
  await productButton.click(); // Click on the "Products" tab
  // Verify the main container for products
  const productsContainer = page.locator('.ProductFilled_filled__3PfEi');
  await expect(productsContainer).toBeVisible({timeout: 80000});

  // Verify the total number of products
  const totalProductsText = await page.locator('.tw-text-lg.tw-font-semibold').innerText();
  const totalProducts = parseInt(totalProductsText.match(/\d+/)[0], 10);
  expect(totalProducts).toBeGreaterThan(0);

  // Verify the sort dropdown
  const sortDropdown = page.locator('select');
  await expect(sortDropdown).toBeVisible();
  const sortOptions = await sortDropdown.locator('option').all();
  expect(sortOptions.length).toBeGreaterThan(0);

  // Function to verify product details
  const verifyProductDetails = async (productElement) => {
    const productName = await productElement.locator('p.tw-text-lg').innerText();
    expect(productName).toBeTruthy();

    const productPrice = await productElement.locator('p.tw-text-xl').innerText();
    expect(productPrice).toMatch(/N\d{1,3}(,\d{3})*(\.\d{2})?/); // Matches currency format

    const productReviews = await productElement.locator('p.tw-text-[#291a19].tw-text-xs').innerText();
    expect(productReviews).toMatch(/\(\d+ reviews\)/); // Matches review format
  };

  // Verify all products on the current page
  const productElements = await page.locator('.tw-shadow-lg.tw-cursor-pointer').all();
  for (const productElement of productElements) {
    await verifyProductDetails(productElement);
  }

  // Verify pagination controls
  const paginationContainer = page.locator('.pagination');
  if (await paginationContainer.isVisible()) {
    const paginationButtons = await paginationContainer.locator('button').all();
    expect(paginationButtons.length).toBeGreaterThan(0);

    // Navigate through pagination
    for (let i = 0; i < paginationButtons.length; i++) {
      await paginationButtons[i].click();
      await page.waitForLoadState('networkidle');

      // Verify products on the new page
      const newProductElements = await page.locator('.tw-shadow-lg.tw-cursor-pointer').all();
      for (const newProductElement of newProductElements) {
        await verifyProductDetails(newProductElement);
      }
    }
  }
  });
});