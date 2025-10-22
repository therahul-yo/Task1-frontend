import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from '../ProjectCard';
import { mockProjects } from '../../mock';

describe('ProjectCard Component', () => {
  const mockProject = mockProjects[0];
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders project name and description', () => {
    render(<ProjectCard project={mockProject} onClick={mockOnClick} />);
    
    expect(screen.getByText(mockProject.name)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
  });

  test('displays correct progress percentage', () => {
    render(<ProjectCard project={mockProject} onClick={mockOnClick} />);
    
    expect(screen.getByText(`${mockProject.progress}%`)).toBeInTheDocument();
  });

  test('shows priority badge with correct styling', () => {
    render(<ProjectCard project={mockProject} onClick={mockOnClick} />);
    
    const priorityBadge = screen.getByText(mockProject.priority);
    expect(priorityBadge).toBeInTheDocument();
  });

  test('displays status badge', () => {
    render(<ProjectCard project={mockProject} onClick={mockOnClick} />);
    
    const statusText = mockProject.status.replace('-', ' ');
    expect(screen.getByText(statusText)).toBeInTheDocument();
  });

  test('calls onClick handler when card is clicked', () => {
    render(<ProjectCard project={mockProject} onClick={mockOnClick} />);
    
    const card = screen.getByText(mockProject.name).closest('.p-6');
    fireEvent.click(card);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('displays budget information', () => {
    render(<ProjectCard project={mockProject} onClick={mockOnClick} />);
    
    const budgetText = `$${(mockProject.spent / 1000).toFixed(0)}k / $${(mockProject.budget / 1000).toFixed(0)}k`;
    expect(screen.getByText(budgetText)).toBeInTheDocument();
  });
});
