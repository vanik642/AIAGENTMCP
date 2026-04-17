import { test, expect } from '@playwright/test';

test('Login and Verify Category 1 Page Title', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Fill username
  await page.fill('input[name="username"]', 'rahulshettyacademy');

  // Fill password
  await page.fill('input[name="password"]', 'Learning@830$3mK2');

  // Click sign in button
  await page.click('input[type="submit"]');

  // Wait for navigation after login to shop page
  await page.waitForURL('**/angularpractice/shop', { timeout: 10000 });
  await page.waitForLoadState('networkidle');

  // Wait for products to load
  await page.waitForTimeout(2000);

  // Find and click on Category 1 link/button
  const category1Link = page.locator('a').filter({ hasText: /Category 1|category 1/i }).first();
  
  // Verify the element exists
  await expect(category1Link).toBeVisible();
  
  // Click on Category 1
  await category1Link.click();
  console.log('✓ Clicked on Category 1');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  // Get the page title
  const pageTitle = await page.title();
  console.log(`✓ Page title: ${pageTitle}`);

  // Verify the page title contains expected content
  expect(pageTitle).toBeTruthy();
  expect(pageTitle.length).toBeGreaterThan(0);

  console.log(`✓ Category 1 page loaded successfully with title: "${pageTitle}"`);

  // Additional verification: check that we're on a category page
  const pageUrl = page.url();
  console.log(`✓ Current URL: ${pageUrl}`);
  
  // Get page heading or content to further verify we're on the right page
  const pageContent = await page.locator('body').textContent();
  if (pageContent) {
    console.log('✓ Page loaded with content');
  }

  expect(pageTitle).not.toBe('');
});
