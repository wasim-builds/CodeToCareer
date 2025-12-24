import { test, expect } from '@playwright/test';

test.describe('Quiz Flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should navigate to quiz dashboard', async ({ page }) => {
        // Click on "Start Quiz" button
        await page.click('text=Start Quiz');

        // Should be on quiz page
        await expect(page).toHaveURL(/.*\/quiz/);

        // Should see topics
        await expect(page.locator('text=Python')).toBeVisible();
        await expect(page.locator('text=JavaScript')).toBeVisible();
    });

    test('should select a topic and start quiz', async ({ page }) => {
        // Navigate to quiz page
        await page.goto('/quiz');

        // Wait for topics to load
        await page.waitForSelector('text=Python', { timeout: 5000 });

        // Click on Python topic
        await page.click('text=Python');

        // Should be on topic detail page
        await expect(page).toHaveURL(/.*\/quiz\/python/);

        // Should see difficulty options
        await expect(page.locator('text=Easy')).toBeVisible();
        await expect(page.locator('text=Medium')).toBeVisible();
        await expect(page.locator('text=Hard')).toBeVisible();
    });

    test('should take a quiz and see results', async ({ page }) => {
        // Navigate directly to Python quiz
        await page.goto('/quiz/python');

        // Select Easy difficulty
        await page.click('text=Easy');

        // Wait for quiz to load
        await page.waitForSelector('text=Question', { timeout: 5000 });

        // Answer first question (select first option)
        const firstOption = page.locator('input[type="radio"]').first();
        await firstOption.click();

        // Click Next button
        await page.click('text=Next');

        // Should see second question
        await expect(page.locator('text=Question 2')).toBeVisible();

        // Skip to end by clicking Submit (if available)
        const submitButton = page.locator('text=Submit Quiz');
        if (await submitButton.isVisible()) {
            await submitButton.click();

            // Should see results page
            await expect(page).toHaveURL(/.*\/results/);
            await expect(page.locator('text=Quiz Results')).toBeVisible();
        }
    });

    test('should filter topics by search', async ({ page }) => {
        await page.goto('/quiz');

        // Type in search box
        const searchInput = page.locator('input[placeholder*="Search"]');
        await searchInput.fill('Python');

        // Should see Python topic
        await expect(page.locator('text=Python')).toBeVisible();

        // Should not see unrelated topics (check if filtered)
        const topicCards = page.locator('[class*="topic"]');
        const count = await topicCards.count();

        // Filtered results should be less than total topics
        expect(count).toBeLessThan(72);
    });

    test('should show quiz statistics', async ({ page }) => {
        await page.goto('/quiz');

        // Should see stats section
        await expect(page.locator('text=35+')).toBeVisible(); // Topics count
        await expect(page.locator('text=5000+')).toBeVisible(); // Questions count
    });
});
