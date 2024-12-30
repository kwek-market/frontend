import { test, expect } from '@playwright/test';

// Define product data dynamically
const products = [
  {
    id: '94edfed4-de3a-4d88-800f-7000b488622c',
    name: 'Destoner',
    url: 'http://localhost:3100/product/94edfed4-de3a-4d88-800f-7000b488622c?id=Destoner',
  },
  // Add more products here
  // { id: 'product-id-2', name: 'Product Name 2', url: 'http://localhost:3100/product/...'},
];

test.describe('Product Details Page Tests', () => {
  for (const product of products) {
    test(`should verify product details for ${product.name}`, async ({ page }) => {
      // Set a timeout of 60 seconds
      test.setTimeout(60000);

      // Navigate to the product page
      await page.goto(product.url);

      // Verify breadcrumb navigation
      const breadcrumb = page.locator('nav.breadcrumb');
      await expect(breadcrumb).toContainText(`Home > Vehicles & Equipment > ${product.name}`);

      // Verify product name and price
      const productName = page.locator('h1');
      await expect(productName).toHaveText(product.name);

      const productPrice = page.locator('h2:has-text("₦")'); // Adjust selector if needed
      await expect(productPrice).toBeVisible();

      // Verify product details (description, size, color, etc.)
      const productDescription = page.locator('text=For rice, beans, maize, wheat, millet');
      await expect(productDescription).toBeVisible();

      const colorOption = page.locator('button[aria-label="Color"]');
      await expect(colorOption).toBeVisible();

      const warrantyInfo = page.locator('text=Warranty: No Warranty');
      const returnPolicy = page.locator('text=Return Policy: No Return Policy');
      await expect(warrantyInfo).toBeVisible();
      await expect(returnPolicy).toBeVisible();

      // Verify quantity selector and Buy Now button
      const quantityInput = page.locator('input[type="number"]');
      await expect(quantityInput).toHaveValue('1');

      const buyNowButton = page.locator('button:has-text("Buy Now")');
      await expect(buyNowButton).toBeVisible();

      // Verify additional sections
      const payOnDelivery = page.locator('text=Pay on Delivery');
      const pickupAvailable = page.locator('text=Pickup & Pay on Collection Available');
      await expect(payOnDelivery).toBeVisible();
      await expect(pickupAvailable).toBeVisible();

      // Verify social sharing buttons
      await expect(page.locator('button:has-text("Facebook")')).toBeVisible();
      await expect(page.locator('button:has-text("Twitter")')).toBeVisible();
      await expect(page.locator('button:has-text("Whatsapp")')).toBeVisible();
      await expect(page.locator('button:has-text("Copy Link")')).toBeVisible();

      // Screenshot for verification
      await page.screenshot({ path: `screenshots/${product.name}_details.png` });
    });
  }
});
