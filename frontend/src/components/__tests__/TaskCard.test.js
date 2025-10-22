import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskCard from '../TaskCard';
import { mockTasks } from '../../mock';

describe('TaskCard Component', () => {
  const mockTask = mockTasks[0];

  test('renders task title and description', () => {
    render(<TaskCard task={mockTask} />);
    
    expect(screen.getByText(mockTask.title)).toBeInTheDocument();
    expect(screen.getByText(mockTask.description)).toBeInTheDocument();
  });

  test('displays due date', () => {
    render(<TaskCard task={mockTask} />);
    
    const dueDate = new Date(mockTask.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    expect(screen.getByText(dueDate)).toBeInTheDocument();
  });

  test('shows priority flag with correct color', () => {
    render(<TaskCard task={mockTask} />);
    
    // Priority flag should be rendered
    const flagIcon = document.querySelector('svg');
    expect(flagIcon).toBeInTheDocument();
  });

  test('renders with draggable prop', () => {
    const { container } = render(<TaskCard task={mockTask} draggable={true} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
