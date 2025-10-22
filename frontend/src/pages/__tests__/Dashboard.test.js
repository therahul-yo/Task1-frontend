import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Dashboard from '../Dashboard';
import { mockApi } from '../../mock';

// Mock the mockApi
jest.mock('../../mock', () => ({
  mockApi: {
    getProjects: jest.fn(),
    getAnalytics: jest.fn()
  }
}));

// Mock toast
jest.mock('../../hooks/use-toast', () => ({
  toast: jest.fn()
}));

const renderDashboard = () => {
  return render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
};

describe('Dashboard Page', () => {
  beforeEach(() => {
    mockApi.getProjects.mockResolvedValue([
      {
        id: '1',
        name: 'Test Project',
        description: 'Test Description',
        status: 'in-progress',
        progress: 50,
        teamMembers: [],
        priority: 'high',
        budget: 10000,
        spent: 5000,
        startDate: '2025-01-01',
        endDate: '2025-12-31'
      }
    ]);

    mockApi.getAnalytics.mockResolvedValue({
      totalProjects: 5,
      activeProjects: 2,
      completedProjects: 1,
      totalTasks: 47,
      completedTasks: 28,
      inProgressTasks: 12,
      todoTasks: 7,
      teamMembers: 6,
      totalBudget: 290000,
      totalSpent: 106250,
      weeklyProgress: []
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders dashboard heading', async () => {
    renderDashboard();
    
    await waitFor(() => {
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });
  });

  test('displays loading state initially', () => {
    renderDashboard();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('loads and displays analytics data', async () => {
    renderDashboard();
    
    await waitFor(() => {
      expect(screen.getByText('Total Projects')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
    });
  });

  test('displays active projects section', async () => {
    renderDashboard();
    
    await waitFor(() => {
      expect(screen.getByText('Active Projects')).toBeInTheDocument();
    });
  });

  test('calls API on mount', async () => {
    renderDashboard();
    
    await waitFor(() => {
      expect(mockApi.getProjects).toHaveBeenCalledTimes(1);
      expect(mockApi.getAnalytics).toHaveBeenCalledTimes(1);
    });
  });
});
