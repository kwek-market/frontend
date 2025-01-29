import { test, expect } from '@playwright/test';
  import { login } from '../utils/sellerloginHelper';

  test.describe('Promotion Navigation', () => {
    test('Login and navigate to product page', async ({ page }) => {
      // Reuse the login step
      await login(page);
  
    
    // Locate and click the "Promotions" tab
    const promotionButton = page.locator('div[role="tab"]:has-text("Promotions")');
    await promotionButton.waitFor({ state: 'visible', timeout: 30000 }); // Ensure it becomes visible within a reasonable timeout
    await promotionButton.scrollIntoViewIfNeeded();
    await promotionButton.click();

       
    // Locate and click the "New Promotion" button
    const newPromotionButton = page.locator('button:has-text("new promotion")');
    await newPromotionButton.waitFor({ state: 'visible', timeout: 30000 }); // Ensure it's visible within a reasonable timeout
    await newPromotionButton.scrollIntoViewIfNeeded();
    await newPromotionButton.click();
    //
    await expect(page).toHaveURL('http://localhost:3100/seller/promote-product', {timeout: 80000});

  // Verify the presence of the main container
  const mainContainer = page.locator('main.PromoteHeader_build__xGT5G');
  await expect(mainContainer).toBeVisible();

  // Verify the "Select Product" dropdown
  const selectProductDropdown = page.locator('.ant-select-selection-placeholder');
  await expect(selectProductDropdown).toHaveText('Select Product');

  // Verify the "Duration" section
  const durationLabel = page.locator('label.PromoteProduct_count__R2jZI');
  await expect(durationLabel).toHaveText('Days');
  const daysInput = page.locator('input#day');
  await expect(daysInput).toHaveValue('0');

  // Verify the "Total Budget" section
  const totalBudgetLabel = page.locator('h4', { hasText: 'Total Budget' });
  await expect(totalBudgetLabel).toBeVisible();
  const budgetAmount = page.locator('h2', { hasText: '5,000.00' });
  await expect(budgetAmount).toBeVisible();
  const budgetRange = page.locator('input.PromoteProduct_range__WIKF_');
  await expect(budgetRange).toHaveValue('5000');

  // Verify the "Payment Method" section
  const paymentMethodLabel = page.locator('h4.PromoteProduct_pay__7kiJX');
  await expect(paymentMethodLabel).toHaveText('Payment Method');
  const availableBalance = page.locator('h6', { hasText: 'NGN 297021200' });
  await expect(availableBalance).toBeVisible();
  const addMoneyButton = page.locator('button', { hasText: 'Add Money' });
  await expect(addMoneyButton).toBeVisible();

  // Verify the "Ad Preview" and "Payment Summary" sections
  const adPreviewLabel = page.locator('h4.PromoteProduct_preview___ifcG');
  await expect(adPreviewLabel).toHaveText('Ad Preview');
  const paymentSummaryLabel = page.locator('h4.PromoteProduct_summary___ZW3d');
  await expect(paymentSummaryLabel).toHaveText('Payment Summary');
  const adDurationSummary = page.locator('p', { hasText: 'Your ad will run for 0 days' });
  await expect(adDurationSummary).toBeVisible();
  const totalBudgetSummary = page.locator('p', { hasText: 'NGN 5,000.00' });
  await expect(totalBudgetSummary).toBeVisible();

  // Interact with the "Add Money" button
  await addMoneyButton.click();
  
  });
});