import { test, expect, Page } from '@playwright/test';

test.describe('Social Media Tests', () => {
  const baseURL = 'http://localhost:3100';
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
  });

  test.skip('Hover on social media links', async () => {
    const socialLinks = ['Facebook', 'Instagram', 'Twitter'];

    const socialSection = page.locator('.Footer_social__mdVIK');
    for (const social of socialLinks) {
      const socialLink = socialSection.locator(`text=${social}`);
      await expect(socialLink).toBeVisible();
      await socialLink.hover();
    }
  });

  test('Hover on missing social media links', async () => {
    const socialSection = page.locator('.Footer_social__mdVIK');
    const missingLink = socialSection.locator('text=Snapchat');

    await expect(missingLink).toHaveCount(0);
  });

  test.afterAll(async () => {
    await page.close();
  });
});
