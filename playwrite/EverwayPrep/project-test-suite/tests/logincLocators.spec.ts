import { test, expect } from '@playwright/test';

test('Login to SauceDemo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');
  // You can store locators for readability:
const username = page.locator('#user-name');
const password = page.locator('#password');
const loginBtn = page.locator('#login-button');

await username.fill('standard_user');
await password.fill('secret_sauce');
await loginBtn.click();
//   to using role based selectors.
//  this is still using role based selectors but storing them in variables for better readability and maintainability.
  // It improves maintainability
  // It aligns with accessibility standards
  // It reduces coupling to implementation details
  // It fails only when user visible behavior changes




});