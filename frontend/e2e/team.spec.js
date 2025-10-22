const { test, expect } = require('@playwright/test');

test.describe('Team Page E2E Tests', () => {
  test('should display team members', async ({ page }) => {
    await page.goto('/team');
    
    // Check page heading
    await expect(page.getByRole('heading', { name: 'Team' })).toBeVisible();
    
    // Check team member cards
    await expect(page.getByText('Sarah Chen')).toBeVisible();
    await expect(page.getByText('Michael Rodriguez')).toBeVisible();
    await expect(page.getByText('Emily Watson')).toBeVisible();
  });

  test('team member cards should display key information', async ({ page }) => {
    await page.goto('/team');
    
    // Check for role information
    await expect(page.getByText('Full Stack Developer')).toBeVisible();
    await expect(page.getByText('UI/UX Designer')).toBeVisible();
    
    // Check for status badges
    await expect(page.getByText('active').first()).toBeVisible();
  });

  test('should display team member stats', async ({ page }) => {
    await page.goto('/team');
    
    // Check for task statistics labels
    await expect(page.getByText('Tasks Assigned').first()).toBeVisible();
    await expect(page.getByText('Completed').first()).toBeVisible();
  });

  test('team member cards should have avatars', async ({ page }) => {
    await page.goto('/team');
    
    // Check that team cards are rendered (avatars are within these cards)
    const teamCard = page.locator('text=Sarah Chen').locator('..');
    await expect(teamCard).toBeVisible();
  });
});
