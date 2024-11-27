import { test, expect } from '@playwright/test';

test('sell with us', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').fill('Testovich');
  await page.getByPlaceholder('Your Email Address').fill(Date.now() + '@mail.com');
  await page.getByPlaceholder('Your Phone Number').fill('0996576325');
  await page.getByPlaceholder('Your Business Brand').fill('NewBrand');
  await page.getByPlaceholder('Please Describe Your Business').fill('The best new brand');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByPlaceholder('Your Full Name')).toBeEmpty();
});