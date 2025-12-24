import { test, expect } from '@playwright/test';

test.describe('Practice Flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should navigate to practice dashboard', async ({ page }) => {
        // Click on "Code Practice" button
        await page.click('text=Code Practice');

        // Should be on practice page
        await expect(page).toHaveURL(/.*\/practice/);

        // Should see practice problems
        await expect(page.locator('text=Two Sum')).toBeVisible();
    });

    test('should filter problems by difficulty', async ({ page }) => {
        await page.goto('/practice');

        // Click on Easy filter
        await page.click('text=Easy');

        // Should see easy problems
        await expect(page.locator('text=Easy')).toBeVisible();
    });

    test('should open a practice problem', async ({ page }) => {
        await page.goto('/practice');

        // Wait for problems to load
        await page.waitForSelector('text=Two Sum', { timeout: 5000 });

        // Click on Two Sum problem
        await page.click('text=Two Sum');

        // Should be on problem page
        await expect(page).toHaveURL(/.*\/practice\/two-sum/);

        // Should see problem description
        await expect(page.locator('text=Given an array')).toBeVisible();
    });

    test('should switch programming language', async ({ page }) => {
        await page.goto('/practice/two-sum');

        // Should see language selector
        const languageSelector = page.locator('select, button').filter({ hasText: /JavaScript|Python|Java/ }).first();

        if (await languageSelector.isVisible()) {
            // Try to switch language
            await languageSelector.click();

            // Should see language options
            await expect(page.locator('text=Python')).toBeVisible();
        }
    });

    test('should show problem examples', async ({ page }) => {
        await page.goto('/practice/two-sum');

        // Should see examples section
        await expect(page.locator('text=Example')).toBeVisible();
        await expect(page.locator('text=Input')).toBeVisible();
        await expect(page.locator('text=Output')).toBeVisible();
    });

    test('should display code editor', async ({ page }) => {
        await page.goto('/practice/two-sum');

        // Should see code editor (textarea or Monaco editor)
        const codeEditor = page.locator('textarea, .monaco-editor').first();
        await expect(codeEditor).toBeVisible();
    });
});

test.describe('Practice Problem Solving', () => {
    test('should run code and see results', async ({ page }) => {
        await page.goto('/practice/two-sum');

        // Wait for editor to load
        await page.waitForTimeout(1000);

        // Look for Run or Submit button
        const runButton = page.locator('button').filter({ hasText: /Run|Submit|Test/ }).first();

        if (await runButton.isVisible()) {
            await runButton.click();

            // Should see results (pass/fail)
            await page.waitForSelector('text=Test', { timeout: 5000 });
        }
    });
});
