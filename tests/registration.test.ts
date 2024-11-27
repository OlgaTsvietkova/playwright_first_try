import { test, expect } from '@playwright/test';

test('User can register ', async ({ page }) => {
  const email = Date.now() + '@mail.com.ua';
  await page.goto('https://shopdemo-alex-hot.koyeb.app/register');
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(email);
  await page.getByPlaceholder('Please Enter Your First Name').fill('FirstName');
  await page.getByPlaceholder('Please Enter Your Last Name').fill('LastName');
  await page.getByPlaceholder('Please Enter Your Password').fill(email);
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await expect(page.getByRole('heading', { name: 'Account Details' })).toBeVisible();
});