import { expect, test } from '@playwright/test';

test.describe('Races page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display a race list', async ({ page }) => {
    await expect(page.locator('h2')).toHaveCount(2);
    const paragraphs = page.locator('p');
    await expect(paragraphs).toHaveCount(2);
    await expect(paragraphs.first()).toContainText('ago');
  });

  test('should display ponies', async ({ page }) => {
    await expect(page.locator('figure')).toHaveCount(10);
    await expect(page.locator('img')).toHaveCount(10);
    await expect(page.locator('figcaption')).toHaveCount(10);
  });
});
