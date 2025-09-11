import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display a title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Ponyracer');
  });

  test('should display a navbar', async ({ page }) => {
    await expect(page.locator('.navbar-brand')).toContainText('PonyRacer');
    await expect(page.locator('.nav-link')).toContainText('Races');
  });

  test('should display a navbar collapsed on small screen', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const navbarBrand = page.locator('.navbar-brand');
    await expect(navbarBrand).toBeVisible();
    const navbarLink = page.locator('.nav-link');
    await expect(navbarLink).not.toBeVisible();

    // toggle the navbar
    const navbarToggler = page.locator('.navbar-toggler');
    await navbarToggler.click();
    await expect(navbarLink).toBeVisible();

    // toggle the navbar again
    await navbarToggler.click();
    await expect(navbarLink).not.toBeVisible();
  });
});
