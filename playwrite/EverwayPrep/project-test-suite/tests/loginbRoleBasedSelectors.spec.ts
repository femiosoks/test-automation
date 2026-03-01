import { test, expect } from '@playwright/test';

test('Login to SauceDemo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  // from using CSS selectors by id
  // await page.goto('https://www.saucedemo.com');
  // await page.fill('#user-name', 'standard_user');
  // await page.fill('#password', 'secret_sauce');

  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory/);

//   Using role based selectors.
//   getByRole() targets elements based on
//   their ARIA role, for example textbox, button
//   their accessible name, usually label text or button text
//   this is more stable and more user focused.

// This is better because it's more resilient to changes in the DOM structure and it reflects how users interact with the page.
  // It improves maintainability
  // It aligns with accessibility standards
  // It reduces coupling to implementation details
  // It fails only when user visible behavior changes


});