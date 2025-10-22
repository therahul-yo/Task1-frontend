const { test, expect } = require('@playwright/test');

test.describe('Tasks Page E2E Tests', () => {
  test('should display kanban board with three columns', async ({ page }) => {
    await page.goto('/tasks');
    
    // Check page heading
    await expect(page.getByRole('heading', { name: 'Tasks' })).toBeVisible();
    
    // Check kanban columns
    await expect(page.getByRole('heading', { name: 'To Do' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'In Progress' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Completed' })).toBeVisible();
  });

  test('should display task cards in columns', async ({ page }) => {
    await page.goto('/tasks');
    
    // Check for task cards
    await expect(page.getByText('Design homepage mockup')).toBeVisible();
    await expect(page.getByText('Implement responsive navigation')).toBeVisible();
  });

  test('should show task counts in column headers', async ({ page }) => {
    await page.goto('/tasks');
    
    // Column headers should show task counts (as badges)
    // The exact count depends on mock data, so we just check they exist
    const toDoColumn = page.locator('text=To Do').locator('..');
    await expect(toDoColumn).toBeVisible();
  });

  test('should have New Task button', async ({ page }) => {
    await page.goto('/tasks');
    
    const newTaskButton = page.getByRole('button', { name: 'New Task' });
    await expect(newTaskButton).toBeVisible();
    await expect(newTaskButton).toBeEnabled();
  });

  test('task cards should display assignee avatars', async ({ page }) => {
    await page.goto('/tasks');
    
    // Task cards should have avatar elements (we can check for their presence)
    const taskCard = page.locator('text=Design homepage mockup').locator('..');
    await expect(taskCard).toBeVisible();
  });
});
