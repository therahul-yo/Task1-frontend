const { test, expect } = require('@playwright/test');

test.describe('Dashboard E2E Tests', () => {
  test('should load dashboard and display key elements', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    
    // Check welcome message
    await expect(page.getByText("Welcome back! Here's what's happening.")).toBeVisible();
    
    // Check stat cards are visible
    await expect(page.getByText('Total Projects')).toBeVisible();
    await expect(page.getByText('Active Tasks')).toBeVisible();
    await expect(page.getByText('Team Members')).toBeVisible();
    await expect(page.getByText('Completion Rate')).toBeVisible();
  });

  test('should display active projects section', async ({ page }) => {
    await page.goto('/');
    
    // Check Active Projects section
    await expect(page.getByRole('heading', { name: 'Active Projects' })).toBeVisible();
    
    // Check if at least one project card is visible
    await expect(page.getByText('Website Redesign')).toBeVisible();
  });

  test('should navigate to projects page when clicking View All', async ({ page }) => {
    await page.goto('/');
    
    // Click View All button
    await page.getByRole('button', { name: 'View All' }).click();
    
    // Should navigate to projects page
    await expect(page).toHaveURL('/projects');
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  });

  test('should have working New Project button', async ({ page }) => {
    await page.goto('/');
    
    // Check New Project button exists
    const newProjectButton = page.getByRole('button', { name: 'New Project' });
    await expect(newProjectButton).toBeVisible();
    await expect(newProjectButton).toBeEnabled();
  });

  test('should display budget overview', async ({ page }) => {
    await page.goto('/');
    
    // Check Budget Overview section
    await expect(page.getByText('Budget Overview')).toBeVisible();
    await expect(page.getByText('Total Budget')).toBeVisible();
    await expect(page.getByText('Spent')).toBeVisible();
  });
});
