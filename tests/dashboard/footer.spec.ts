import { test, expect } from "@playwright/test";

test.describe('Footer Social Media Test', () => {
  test('Validate Social Media Links', async ({ page }) => {
    await page.goto('http://localhost:3100');

    const socialMediaSelectors = [
      'a[href*="facebook"]',
      'a[href*="instagram"]',
      'a[href*="twitter"]',
    ];

    for (const selector of socialMediaSelectors) {
      const socialLink = page.locator(selector);
      await expect(socialLink).toBeVisible();
    }
  });
});

test.describe('Footer Text Test', () => {
  test('Validate Footer Text', async ({ page }) => {
    await page.goto('http://localhost:3100');

    const footerText = page.locator('text=Kwekmarket eCommerce © 2022 . All Rights Reserved');
    await expect(footerText).toBeVisible();
  });
});




test.describe('Footer Navigation Links Test', () => {
  
    const footerLinks = [
      { name: 'About Us', path: '/aboutUs', url: 'http://localhost:3100/aboutUs' },
      { name: 'Contact Us', path: '/contact-us', url: 'http://localhost:3100/contact-us' },
      { name: 'Terms of Service', path: '/terms-of-service', url: 'http://localhost:3100/terms-of-service' },
    ];
  
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3100');
    });
  
    footerLinks.forEach(link => {
      test(`should navigate to correct page when clicking "${link.name}" footer link`, async ({ page }) => {
        const footer = page.locator('footer');
        const footerLink = footer.locator(`a:has-text("${link.name}")`);
  
        await footerLink.scrollIntoViewIfNeeded();
        await expect(footerLink).toBeVisible();
        
        await footerLink.click();
        await page.waitForLoadState('domcontentloaded');
        await expect(page).toHaveURL(link.url, { timeout: 30000 });
      });
    });


    test.describe.skip('Footer Navigation Links Test', () => {
  
        const footerLinks = [
          { name: 'Buyer Policy', path: '/buyerPolicy', url: 'http://localhost:3100/buyerPolicy' },
          { name: 'Kwek Return Policy', path: '/returnPolicy', url: 'http://localhost:3100/returnPolicy' },
        ];
      
        test.beforeEach(async ({ page }) => {
          await page.goto('http://localhost:3100');
        });
      
        footerLinks.forEach(link => {
          test(`should navigate to correct page when clicking "${link.name}" footer link`, async ({ page }) => {
            const footer = page.locator('footer');
            const footerLink = footer.locator(`a:has-text("${link.name}")`);
            
            await expect(footerLink).toBeVisible();
            await footerLink.click({ force: true });
            
            // Wait for navigation to complete
            await page.waitForLoadState('domcontentloaded');
            await expect(page).toHaveURL(link.url);
          });
        });
      });
      




   });
  