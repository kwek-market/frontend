  import { test, expect } from '@playwright/test';
  import { login } from '../utils/sellerloginHelper';

  test.describe('Product Navigation', () => {
    test('Login and navigate to product page', async ({ page }) => {
      // Reuse the login step
      await login(page);
  
    
    // Locate and click the "Wallet" tab
    const walletButton = page.locator('div[role="tab"]:has-text("Wallet")');
    await expect(walletButton).toBeVisible({timeout: 80000}); // Ensure it's visible
    await walletButton.click(); 
       
    // Verify Fund Wallet button
  const fundWalletButton = await page.locator('button:has-text("Fund Wallet")');
  await expect(fundWalletButton).toBeVisible();

  // Verify Withdraw Funds button
  const withdrawFundsButton = await page.locator('button.tw-bg-red-kwek100:has-text("Withdraw funds")');
  await expect(withdrawFundsButton).toBeVisible({timeout: 80000});

  // Verify balance card
//   const balanceCard = page.locator('dw.tw-text-gray-kwek900:has-text("Balance")');
//   await expect(balanceCard).toBeVisible({timeout: 90000});
//   const balanceValue = await balanceCard.locator('h2').innerText();
//   console.log(`Balance: ${balanceValue}`);

  // Verify invoice card
//   const invoiceCard = page.locator('div:has-text("Invoice")');
//   await expect(invoiceCard).toBeVisible();
//   const invoiceValue = await invoiceCard.locator('h2').innerText();
//   console.log(`Invoice: ${invoiceValue}`);

//   // Verify total income card
//   const totalIncomeCard = page.locator('div:has-text("Total Income")');
//   await expect(totalIncomeCard).toBeVisible();
//   const totalIncomeValue = await totalIncomeCard.locator('h2').innerText();
//   console.log(`Total Income: ${totalIncomeValue}`);

  // Verify History and Invoices tabs
  const historyTab = await page.locator('div[role="tab"]:has-text("HISTORY")');
  const invoicesTab = await page.locator('div[role="tab"]:has-text("INVOICES")');
  await expect(historyTab).toBeVisible();
  await expect(invoicesTab).toBeVisible();

  // Verify Issue Invoice button
  const issueInvoiceButton = page.locator('button:has-text("ISSUE INVOICE")');
  await expect(issueInvoiceButton).toBeVisible();

  // Verify transaction table headers
  const tableHeaders = ['remarks', 'date', 'amount', 'status', 'balance'];
  for (const header of tableHeaders) {
    const headerLocator = page.locator(`thead td:has-text("${header.toUpperCase()}")`);
    await expect(headerLocator).toBeVisible();
  }

  // Verify transaction table rows
  const tableRows = await page.locator('tbody tr').count();
  console.log(`Total transactions: ${tableRows}`);
  for (let i = 0; i < tableRows; i++) {
    const row = page.locator(`tbody tr:nth-child(${i + 1})`);

    const remarks = await row.locator('td:nth-child(1)').innerText();
    const date = await row.locator('td:nth-child(2)').innerText();
    const amount = await row.locator('td:nth-child(3)').innerText();
    const status = await row.locator('td:nth-child(4)').innerText();
    const balance = await row.locator('td:nth-child(5)').innerText();

    console.log(`Transaction ${i + 1}:`);
    console.log(`  Remarks: ${remarks}`);
    console.log(`  Date: ${date}`);
    console.log(`  Amount: ${amount}`);
    console.log(`  Status: ${status}`);
    console.log(`  Balance: ${balance}`);

    // Validate all fields are non-empty
    expect(remarks).not.toBe('');
    expect(date).not.toBe('');
    expect(amount).not.toBe('');
    expect(status).not.toBe('');
    expect(balance).not.toBe('');
  }

  await fundWalletButton.click();
  console.log('Fund Wallet button clicked.');
  
  // Click on the Fund Wallet button
// await fundWalletButton.click();
// console.log('Fund Wallet button clicked.');

// Wait for the modal to appear
const fundWalletModal = await page.locator('.ant-modal-content:has-text("Add Money")');
await expect(fundWalletModal).toBeVisible({ timeout: 80000 });

// Interact with the modal input and confirm button
const amountInput = await fundWalletModal.locator('input#amount');
await amountInput.fill('5000');
console.log('Amount entered.');

// Click the Add Money button
const addMoneyButton = await fundWalletModal.locator('button:has-text("Add Money")');
await addMoneyButton.click();
console.log('Add Money button clicked.');

// Verify success message
// const successMessage = await page.locator('text=Funds added successfully');
// await expect(successMessage).toBeVisible({ timeout: 80000 });
// console.log('Funds added successfully message verified.');


  // Test Withdraw Funds functionality
  await withdrawFundsButton.click();
  const withdrawModal = await page.locator('.ant-drawer-body:has-text("Withdraw Funds")');
  await expect(withdrawModal).toBeVisible();
  await withdrawModal.locator('input#amount').fill('3000');
  await withdrawModal.locator('input#password').fill('testPassword123'); // Replace with test password
  await withdrawModal.locator('button:has-text("Withdraw")').click();
  const withdrawSuccessMessage = await page.locator('text=Withdrawal successful');
  await expect(withdrawSuccessMessage).toBeVisible();

  console.log('All wallet functionalities tested successfully.');





  
  });

  
});

 

