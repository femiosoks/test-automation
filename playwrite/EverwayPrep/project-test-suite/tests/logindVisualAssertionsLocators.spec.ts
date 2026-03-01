import { test, expect } from '@playwright/test';

test('Login to SauceDemo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

      const username = page.locator('#user-name');
      const password = page.locator('#password');
      const loginBtn = page.locator('#login-button');

      await username.fill('standard_user');
      await password.fill('secret_sauce');
      await loginBtn.click();
        // Visual screenshot assertion
      await expect(page).toHaveScreenshot('login-baseline.png');

});
test('Dashboard loads correctly', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  // Visual assertion for dashboard
  await expect(page).toHaveScreenshot('dashboard-baseline.png', { fullPage: true });
});