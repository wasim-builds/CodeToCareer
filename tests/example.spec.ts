import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check if the main heading is visible
  await expect(page.getByRole('heading', { name: /Sois Belle Candles/i })).toBeVisible();
  
  // Check if shop now button exists
  await expect(page.getByRole('link', { name: /Shop Now/i })).toBeVisible();
});

test('shop page displays products', async ({ page }) => {
  await page.goto('/shop');
  
  // Check if shop page heading is visible
  await expect(page.getByRole('heading', { name: /SHOP ALL PRODUCTS/i })).toBeVisible();
  
  // Check if products are displayed (at least one product card)
  const productCards = page.locator('[class*="group"]').filter({ hasText: /€/ });
  await expect(productCards.first()).toBeVisible();
});

test('can navigate to product page', async ({ page }) => {
  await page.goto('/shop');
  
  // Click on first product
  const firstProduct = page.locator('a[href^="/product/"]').first();
  await firstProduct.click();
  
  // Check if we're on a product page
  await expect(page).toHaveURL(/\/product\/\w+/);
  
  // Check if product name is visible
  const productName = page.locator('h1').first();
  await expect(productName).toBeVisible();
});

test('cart functionality', async ({ page }) => {
  await page.goto('/shop');
  
  // Find a product without variants and add to cart
  const addToCartButton = page.getByRole('button', { name: /Add to cart/i }).first();
  await addToCartButton.click();
  
  // Navigate to cart
  await page.goto('/cart');
  
  // Check if cart page loads
  await expect(page.getByRole('heading', { name: /Shopping Cart/i })).toBeVisible();
});

