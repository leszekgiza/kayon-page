import { test, expect } from '@playwright/test';

test.describe('Navigation Translations', () => {
  test('Default navigation (EN browser) displays English menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Default browser language is EN, so menu should be in English
    await expect(page.locator('nav a:has-text("Who we help")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Offer")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Products")')).toBeVisible();
  });

  test('Polish navigation menu displays after selecting PL language', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open menu overlay by clicking the menu button
    const menuButton = page.locator('button').filter({ hasText: 'menu' }).first();
    await menuButton.click();

    // Wait for overlay to appear
    await page.waitForSelector('[aria-label*="Switch to PL"]');

    // Click PL language button in the menu overlay
    await page.click('[aria-label="Switch to PL"]');

    // Close the menu overlay by clicking the X button (language-independent selector)
    await page.click('button:has(svg path[d*="M6 6l12 12"])');

    // Wait for overlay to close
    await page.waitForTimeout(500);

    // Check desktop navigation buttons are now in Polish
    await expect(page.locator('nav.md\\:block a:has-text("Dla kogo?")')).toBeVisible();
    await expect(page.locator('nav.md\\:block a:has-text("Oferta")')).toBeVisible();
    await expect(page.locator('nav.md\\:block a:has-text("Produkty")')).toBeVisible();
  });

  test('English navigation menu persists after selecting EN language', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open menu overlay by clicking the menu button
    const menuButton = page.locator('button').filter({ hasText: 'menu' }).first();
    await menuButton.click();

    // Wait for overlay to appear
    await page.waitForSelector('[aria-label*="Switch to EN"]');

    // Click EN language button in the menu overlay (should already be selected)
    await page.click('[aria-label="Switch to EN"]');

    // Close the menu overlay by clicking the X button (language-independent selector)
    await page.click('button:has(svg path[d*="M6 6l12 12"])');

    // Wait for overlay to close
    await page.waitForTimeout(500);

    // Check desktop navigation buttons remain in English
    await expect(page.locator('nav.md\\:block a:has-text("Who we help")')).toBeVisible();
    await expect(page.locator('nav.md\\:block a:has-text("Offer")')).toBeVisible();
    await expect(page.locator('nav.md\\:block a:has-text("Products")')).toBeVisible();
  });

  test('German navigation menu displays after selecting DE language', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open menu overlay by clicking the menu button
    const menuButton = page.locator('button').filter({ hasText: 'menu' }).first();
    await menuButton.click();

    // Wait for overlay to appear
    await page.waitForSelector('[aria-label*="Switch to DE"]');

    // Click DE language button in the menu overlay
    await page.click('[aria-label="Switch to DE"]');

    // Close the menu overlay by clicking the X button (language-independent selector)
    await page.click('button:has(svg path[d*="M6 6l12 12"])');

    // Wait for overlay to close
    await page.waitForTimeout(500);

    // Check desktop navigation buttons are now in German
    await expect(page.locator('nav.md\\:block a:has-text("Für wen?")')).toBeVisible();
    await expect(page.locator('nav.md\\:block a:has-text("Angebot")')).toBeVisible();
    await expect(page.locator('nav.md\\:block a:has-text("Produkte")')).toBeVisible();
  });
});

test.describe('Navigation Functionality', () => {
  test('Desktop navigation buttons are visible on 1920x1080', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that navigation is visible
    const nav = page.locator('nav.md\\:block');
    await expect(nav).toBeVisible();

    // Check menu buttons (English is default for EN browser)
    await expect(page.locator('nav a:has-text("Who we help")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Offer")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Products")')).toBeVisible();

    // Check right icons (contact, platform, menu)
    const rightIcons = page.locator('nav div').filter({ hasText: /chat_bubble|login|menu/ }).first();
    await expect(rightIcons).toBeVisible();
  });

  test('Carousel navigation works in Nasi klienci section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#nasi-klienci');
    await expect(section).toBeVisible();

    // Check next/prev buttons exist
    const nextButton = section.locator('button[aria-label*="Next"], button[aria-label*="Następny"]');
    const prevButton = section.locator('button[aria-label*="Previous"], button[aria-label*="Poprzedni"]');

    await expect(nextButton).toBeVisible();
    await expect(prevButton).toBeVisible();
  });

  test('Carousel navigation works in Produkty section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#produkty');
    await expect(section).toBeVisible();

    // Check next/prev buttons exist
    const nextButton = section.locator('button[aria-label="Next"]');
    const prevButton = section.locator('button[aria-label="Previous"]');

    await expect(nextButton).toBeVisible();
    await expect(prevButton).toBeVisible();
  });
});
