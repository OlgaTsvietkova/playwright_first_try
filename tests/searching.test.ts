import { test, expect } from '@playwright/test';

test('Search for product', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByPlaceholder('Search Products').pressSequentially('cucumber');
  await page.getByRole('link', { name: 'MARINATED CUCUMBERS NEZHIN STYLE $' }).click();
  await expect(page.getByRole('main')).toContainText('MARINATED CUCUMBERS NEZHIN STYLE');
});