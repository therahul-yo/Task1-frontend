import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatCard from '../StatCard';
import { LayoutDashboard } from 'lucide-react';

describe('StatCard Component', () => {
  test('renders title and value', () => {
    render(
      <StatCard
        title="Total Projects"
        value="5"
        icon={LayoutDashboard}
        color="blue"
      />
    );
    
    expect(screen.getByText('Total Projects')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('displays trend information when provided', () => {
    render(
      <StatCard
        title="Active Tasks"
        value="12"
        icon={LayoutDashboard}
        trend="up"
        trendValue="15%"
        color="green"
      />
    );
    
    expect(screen.getByText('15%')).toBeInTheDocument();
    expect(screen.getByText('vs last week')).toBeInTheDocument();
  });

  test('renders without trend information', () => {
    render(
      <StatCard
        title="Team Members"
        value="6"
        icon={LayoutDashboard}
        color="purple"
      />
    );
    
    expect(screen.getByText('Team Members')).toBeInTheDocument();
    expect(screen.queryByText('vs last week')).not.toBeInTheDocument();
  });

  test('applies correct color class', () => {
    const { container } = render(
      <StatCard
        title="Test"
        value="10"
        icon={LayoutDashboard}
        color="blue"
      />
    );
    
    const iconContainer = container.querySelector('.bg-blue-50');
    expect(iconContainer).toBeInTheDocument();
  });
});
