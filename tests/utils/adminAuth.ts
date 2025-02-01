import { config } from 'tests/utils/config'

export const loginAsNormalUser = async (page) => {
    await page.goto(`${config.baseUrl}/login`);
    await page.fill('input[name="email"]', config.email);
    await page.fill('input[name="password"]', config.password);
    await page.getByRole('button', { name: 'Sign In' }).click();
  };
  

  export const switchToAdminUser = async (page) => {  
    const adminButton = page.locator('text=Switch to Admin');
    await adminButton.waitFor({ state: 'visible', timeout: 150000 });
    await adminButton.scrollIntoViewIfNeeded();
    await adminButton.click();
  };

  export const switchToUser = async (page) => {  
    const userButton = page.locator('a[href="/"]');
    await userButton.waitFor({ state: 'visible', timeout: 100000 });
    await userButton.scrollIntoViewIfNeeded();
    await userButton.click();
  };