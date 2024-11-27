import { test, expect } from '@playwright/test';

test('tests user can submit contact us form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('Test');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill(Date.now() + '@mail.com.ua');
  await page.getByPlaceholder('Please Describe Your Message').click();
  await page.getByPlaceholder('Please Describe Your Message').fill('Hello just testing, hope it goes well');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByPlaceholder('You Full Name')).toBeEmpty();
});

test('tests user can NOT submit contact us form with email that was used before', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('Test');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill('test@mail.com');
  await page.getByPlaceholder('Please Describe Your Message').click();
  await page.getByPlaceholder('Please Describe Your Message').fill('Hello just testing, hope it goes well');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading', {name: 'Please Try Again!'})).toBeVisible();
  await expect(page.getByText('A request already existed for same email address')).toBeVisible();
});