import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/home');
});

test('HomePage renders correctly', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1, name: 'Vite + React' })).toBeVisible();
  await expect(page.getByRole('button', { name: /count is/i })).toBeVisible();
  await expect(page.getByText(/Click on the Vite and React logos to learn more/i)).toBeVisible();
});

test('버튼 클릭 시 카운트 증가', async ({ page }) => {
  const button = page.getByRole('button', { name: /count is/i });
  const count = page.getByText(/count is/i);

  await expect(count).toHaveText('count is 0');

  await button.click();

  await expect(count).toHaveText('count is 1');
});
