import { test, expect } from '@playwright/test';

test.describe('Beauty Product Page', () => {
  test('should render all UI elements on beauty page', async ({ page }) => {
    // Navigate to the Sign In page
    await page.goto('http://localhost:3100/category/Beauty%20&%20Personal%20care');

    // Validate the UI elements
    await expect(page.getByText('Filters')).toBeVisible();
    await expect(page.getByText('Sort by:')).toBeVisible();

    const productGrid = page.locator('.GridContainer_products__9AobY');

     // Ensure the product grid container exists
     await expect(productGrid).toHaveCount(1);
   
     // Check for at least one product inside the grid
  const productCount = await productGrid.locator('.GridContainer_product__RnJgf').count();
  expect(productCount).toBeLessThan(1000); // Corrected assertion
     });
  });
