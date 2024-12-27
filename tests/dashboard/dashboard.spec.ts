import { test, expect, Page, Browser } from '@playwright/test';

test.describe('Kwekmarket Dashboard E2E Tests', () => {
  const baseURL = 'http://localhost:3100'; // Replace with the actual URL
  let page: Page;
  let browser: Browser;

  test.beforeAll(async ({ browser: browserInstance }) => {
    // Create a single browser instance to be shared across tests
    browser = browserInstance;
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(baseURL);
  });

  test('Verify header, search bar, and navigation links', async () => {
    // Verify the logo (scoped to header)
    const logo = page.locator('header >> text=Kwekmarket');
    await expect(logo).toBeVisible();

    // Verify search bar
    const searchInput = page.locator('input[placeholder="I\'m searching for..."]');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('test product');
    await page.locator('button:has-text("Search")').click();

    // Verify navigation links
    const navLinks = ['Shop', 'About Us', 'Contact Us', 'All Categories'];
    for (const link of navLinks) {
      await expect(page.locator(`header >> text=${link}`)).toBeVisible(); // Scoped to header
    }
  });

  test('Verify category section', async () => {
    const categories: string[] = [
      'Vehicles & Equipment',
      'Beauty & Personal care',
      'Home & Garden',
      'Baby & Toddler Toys',
      'Fashion',
    ];

    const categorySection = page.locator('.CategorySection'); // Replace with actual class
    for (const category of categories) {
      await expect(categorySection.locator(`text=${category}`)).toBeVisible();
    }
  });

  test('Verify promotional banner for Women section', async () => {
    const promoText = 'BUY TWO, Get FOR WOMEN Get up to 30% Off';
    const shopNowButton = page.locator('text=SHOP NOW');
    
    const promoBanner = page.locator(`text=${promoText}`).first(); // Target the first occurrence
    await expect(promoBanner).toBeVisible();
    await expect(shopNowButton).toBeVisible();

    // Click on "SHOP NOW" button and verify navigation
    await shopNowButton.click();
    await expect(page).toHaveURL(/.*shop/); // Replace with the actual shop URL pattern
    await page.goto(baseURL); // Navigate back for the next test
  });

  test('Verify services section (24hrs Delivery, Secure Payment, 24/7 Support)', async () => {
    const serviceTexts: string[] = [
      '24hrs Delivery weekday delivery in 24-hours',
      'Secure Payment Shop safely with our secure payment guarantee!',
      '24/7 Support We\'re here anytime—24/7 support at your service!',
    ];

    const serviceSection = page.locator('.ServicesContainer'); // Replace with the actual container class
    for (const serviceText of serviceTexts) {
      await expect(serviceSection.locator(`text=${serviceText}`)).toBeVisible();
    }
  });

  test('Verify footer links and policies', async () => {
    const footerLinks: string[] = [
      'About Us', 'Contact Us', 'Terms of Service',
      'Buyer Policy', 'Kwek Return Policy',
      'Sell on Kwek', 'Seller Policy',
      'Privacy Policy', 'Billing Policy',
    ];

    const footer = page.locator('footer'); // Scoped to footer
    for (const link of footerLinks) {
      const footerLink = footer.locator(`text=${link}`);
      await expect(footerLink).toBeVisible();
      await footerLink.click();
      await expect(page).not.toHaveURL(baseURL); // Ensure navigation occurs
      await page.goBack();
    }

    // Verify newsletter subscription
    const emailInput = page.locator('input[placeholder="Enter your email address..."]');
    await emailInput.fill('test@example.com');
    await page.locator('button:has-text("Subscribe")').click();
    await expect(page.locator('text=Thank you for subscribing')).toBeVisible();
  });

  test('Verify social media links', async () => {
    const socialLinks: string[] = ['Facebook', 'Instagram', 'Twitter']; // Update with actual selectors or labels

    const socialSection = page.locator('.SocialMediaContainer'); // Scoped to social media container
    for (const social of socialLinks) {
      const socialLink = socialSection.locator(`text=${social}`);
      await expect(socialLink).toBeVisible();
    }
  });

  test.afterAll(async () => {
    // Close the page and browser context after all tests
    await page.close();
  });
});
