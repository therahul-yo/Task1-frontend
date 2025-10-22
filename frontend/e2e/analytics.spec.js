const { test, expect } = require('@playwright/test');

test.describe('Analytics Page E2E Tests', () => {
  test('should display analytics overview', async ({ page }) => {
    await page.goto('/analytics');
    
    // Check page heading
    await expect(page.getByRole('heading', { name: 'Analytics' })).toBeVisible();
    
    // Check key metrics cards
    await expect(page.getByText('Total Tasks')).toBeVisible();
    await expect(page.getByText('Completed')).toBeVisible();
    await expect(page.getByText('In Progress')).toBeVisible();
  });

  test('should display weekly progress chart', async ({ page }) => {
    await page.goto('/analytics');
    
    // Check for weekly progress section
    await expect(page.getByText('Weekly Progress')).toBeVisible();
    
    // Check for week labels
    await expect(page.getByText('Week 1')).toBeVisible();
    await expect(page.getByText('Week 2')).toBeVisible();
  });

  test('should display project status distribution', async ({ page }) => {
    await page.goto('/analytics');
    
    // Check Project Status section
    await expect(page.getByText('Project Status')).toBeVisible();
    await expect(page.getByText('Active Projects')).toBeVisible();
    await expect(page.getByText('Completed Projects')).toBeVisible();
  });

  test('should display budget utilization', async ({ page }) => {
    await page.goto('/analytics');
    
    // Check Budget Utilization section
    await expect(page.getByText('Budget Utilization')).toBeVisible();
    await expect(page.getByText('Budget Used')).toBeVisible();
  });

  test('analytics should show completion rate percentage', async ({ page }) => {
    await page.goto('/analytics');
    
    // Should display completion rate (it's calculated from mock data)
    await expect(page.getByText('Completion Rate')).toBeVisible();
  });
});
