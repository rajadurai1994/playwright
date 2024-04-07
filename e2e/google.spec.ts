import { test, expect } from '@playwright/test';

test('google page open', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page.locator(`#logo`)).toBeVisible
});

test('search area is visible', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page.locator(`textarea`)).toHaveText('xyz')
});

test('search button is present', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page.locator(`type=submit`)).toBeVisible
});