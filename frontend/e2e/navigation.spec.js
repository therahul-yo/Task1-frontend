const { test, expect } = require('@playwright/test');

test.describe('Navigation E2E Tests', () => {
  test('should navigate through all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Start at Dashboard
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    
    // Navigate to Projects
    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL('/projects');
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
    
    // Navigate to Tasks
    await page.getByRole('link', { name: 'Tasks' }).click();
    await expect(page).toHaveURL('/tasks');
    await expect(page.getByRole('heading', { name: 'Tasks' })).toBeVisible();
    
    // Navigate to Team
    await page.getByRole('link', { name: 'Team' }).click();
    await expect(page).toHaveURL('/team');
    await expect(page.getByRole('heading', { name: 'Team' })).toBeVisible();
    
    // Navigate to Analytics
    await page.getByRole('link', { name: 'Analytics' }).click();
    await expect(page).toHaveURL('/analytics');
    await expect(page.getByRole('heading', { name: 'Analytics' })).toBeVisible();
    
    // Navigate back to Dashboard
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page).toHaveURL('/');
  });

  test('should highlight active navigation item', async ({ page }) => {
    await page.goto('/');
    
    // Check Dashboard is active (has blue background)
    const dashboardLink = page.getByRole('link', { name: 'Dashboard' });
    await expect(dashboardLink).toHaveClass(/bg-blue-50/);
    
    // Navigate to Projects
    await page.getByRole('link', { name: 'Projects' }).click();
    
    // Projects should now be active
    const projectsLink = page.getByRole('link', { name: 'Projects' });
    await expect(projectsLink).toHaveClass(/bg-blue-50/);
  });

  test('sidebar should be visible on all pages', async ({ page }) => {
    await page.goto('/');
    
    // Check sidebar logo
    await expect(page.getByText('ProjectHub')).toBeVisible();
    
    // Navigate to different page
    await page.getByRole('link', { name: 'Projects' }).click();
    
    // Sidebar should still be visible
    await expect(page.getByText('ProjectHub')).toBeVisible();
  });
});
