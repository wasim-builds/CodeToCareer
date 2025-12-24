import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
    test.beforeEach(async ({ page }) => {
        // Clear localStorage before each test
        await page.goto('/');
        await page.evaluate(() => localStorage.clear());
    });

    test('should show login page', async ({ page }) => {
        await page.goto('/login');

        // Should see login form
        await expect(page.locator('input[type="email"]')).toBeVisible();
        await expect(page.locator('input[type="password"]')).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

    test('should navigate to register page', async ({ page }) => {
        await page.goto('/login');

        // Click on register link
        await page.click('text=Register');

        // Should be on register page
        await expect(page).toHaveURL(/.*\/register/);
        await expect(page.locator('input[type="text"]')).toBeVisible(); // Name field
    });

    test('should register a new user', async ({ page }) => {
        await page.goto('/register');

        // Fill registration form
        await page.fill('input[type="text"]', 'Test User');
        await page.fill('input[type="email"]', 'test@example.com');
        await page.fill('input[type="password"]', 'password123');

        // Submit form
        await page.click('button[type="submit"]');

        // Should redirect to home or quiz page
        await page.waitForURL(/.*\/(quiz|$)/, { timeout: 5000 });

        // Should see user name in header
        await expect(page.locator('text=Test User')).toBeVisible();
    });

    test('should login existing user', async ({ page }) => {
        // First register a user
        await page.goto('/register');
        await page.fill('input[type="text"]', 'Login Test');
        await page.fill('input[type="email"]', 'login@example.com');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');

        // Wait for redirect
        await page.waitForURL(/.*\/(quiz|$)/, { timeout: 5000 });

        // Logout
        const logoutButton = page.locator('text=Logout');
        if (await logoutButton.isVisible()) {
            await logoutButton.click();
        }

        // Go to login page
        await page.goto('/login');

        // Login with same credentials
        await page.fill('input[type="email"]', 'login@example.com');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');

        // Should be logged in
        await page.waitForURL(/.*\/(quiz|$)/, { timeout: 5000 });
        await expect(page.locator('text=Login Test')).toBeVisible();
    });

    test('should show error for invalid credentials', async ({ page }) => {
        await page.goto('/login');

        // Try to login with wrong password
        await page.fill('input[type="email"]', 'wrong@example.com');
        await page.fill('input[type="password"]', 'wrongpassword');
        await page.click('button[type="submit"]');

        // Should show error or stay on login page
        await page.waitForTimeout(2000);

        // Should still be on login page or show error
        const currentUrl = page.url();
        expect(currentUrl).toContain('login');
    });

    test('should access profile page when logged in', async ({ page }) => {
        // Register and login
        await page.goto('/register');
        await page.fill('input[type="text"]', 'Profile Test');
        await page.fill('input[type="email"]', 'profile@example.com');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');

        // Navigate to profile
        await page.goto('/profile');

        // Should see profile information
        await expect(page.locator('text=Profile Test')).toBeVisible();
        await expect(page.locator('text=profile@example.com')).toBeVisible();
    });

    test('should persist login after page refresh', async ({ page }) => {
        // Register a user
        await page.goto('/register');
        await page.fill('input[type="text"]', 'Persist Test');
        await page.fill('input[type="email"]', 'persist@example.com');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');

        // Wait for redirect
        await page.waitForURL(/.*\/(quiz|$)/, { timeout: 5000 });

        // Refresh page
        await page.reload();

        // Should still be logged in
        await expect(page.locator('text=Persist Test')).toBeVisible();
    });
});
