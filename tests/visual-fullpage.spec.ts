import { test, expect } from '@playwright/test';
import * as path from 'path';

const FIGMA_DIR = path.join(__dirname, '../figma-data/Figma Screenshot');

test.describe('Full Page Visual Regression Tests (1920x1080)', () => {
  test('Homepage matches Figma design', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for images and animations to load
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('home-all.png', {
      fullPage: true,
      maxDiffPixels: 20,
    });
  });

  test('Kontakt page matches Figma design', async ({ page }) => {
    await page.goto('/kontakt');
    await page.waitForLoadState('networkidle');

    // Wait for images and animations to load
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('kontakt-all.png', {
      fullPage: true,
      maxDiffPixels: 20,
    });
  });

  test('Systemy page matches Figma design', async ({ page }) => {
    await page.goto('/systemy');
    await page.waitForLoadState('networkidle');

    // Wait for images and animations to load
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('systemy-all.png', {
      fullPage: true,
      maxDiffPixels: 20,
    });
  });
});
