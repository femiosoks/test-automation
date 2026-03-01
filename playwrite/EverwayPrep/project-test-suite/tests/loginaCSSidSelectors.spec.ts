import { test, expect } from '@playwright/test';

test('Login to SauceDemo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/);

});

// These are tightly coupled(dependent on something) to the DOM structure. 
// If the ids change, your test breaks.
// Role based selectors use the accessibility tree, 
// which makes tests more resilient and closer to how a user interacts with the page.