import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { TaskList } from '../../components/TaskList';
import taskManagementReducer from '../../redux/slices/tasksManagementSlice';
import allTasksReducer from '../../redux/slices/alltasksSlice';

const mockTasks = [
  {
    _id: '1',
    title: 'Test Task 1',
    description: 'Description 1',
    status: 'To Do',
    priority: 'High',
    dueDate: '2026-03-01',
  },
  {
    _id: '2',
    title: 'Test Task 2',
    description: 'Description 2',
    status: 'Completed',
    priority: 'Low',
    dueDate: '2026-03-05',
  },
];

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      taskManagement: taskManagementReducer,
      allTasks: allTasksReducer,
    },
    preloadedState,
  });
};

describe('TaskList Component', () => {
  const renderWithProvider = (component, store) => {
    return render(<Provider store={store}>{component}</Provider>);
  };

  it('should render empty state message when no tasks', () => {
    const store = createTestStore({
      taskManagement: { currentTask: null },
      allTasks: { tasks: [], sortBy: '' },
    });

    renderWithProvider(<TaskList tasks={[]} />, store);
    expect(screen.getByText('No tasks yet. Add one!')).toBeInTheDocument();
  });

  it('should render tasks when tasks array has items', () => {
    const store = createTestStore({
      taskManagement: { currentTask: null },
      allTasks: { tasks: mockTasks, sortBy: '' },
    });

    renderWithProvider(<TaskList tasks={mockTasks} />, store);
    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.getByText('Test Task 2')).toBeInTheDocument();
  });

  it('should render task priority badges', () => {
    const store = createTestStore({
      taskManagement: { currentTask: null },
      allTasks: { tasks: mockTasks, sortBy: '' },
    });

    renderWithProvider(<TaskList tasks={mockTasks} />, store);
    expect(screen.getByText('High')).toBeInTheDocument();
    expect(screen.getByText('Low')).toBeInTheDocument();
  });

  it('should render task status badges', () => {
    const store = createTestStore({
      taskManagement: { currentTask: null },
      allTasks: { tasks: mockTasks, sortBy: '' },
    });

    renderWithProvider(<TaskList tasks={mockTasks} />, store);
    expect(screen.getAllByText('To Do').length).toBeGreaterThan(0);
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('should have edit and delete buttons', () => {
    const store = createTestStore({
      taskManagement: { currentTask: null },
      allTasks: { tasks: mockTasks, sortBy: '' },
    });

    renderWithProvider(<TaskList tasks={mockTasks} />, store);
    const editButtons = screen.getAllByLabelText(/Edit task:/i);
    const deleteButtons = screen.getAllByLabelText(/Delete task:/i);
    
    expect(editButtons).toHaveLength(2);
    expect(deleteButtons).toHaveLength(2);
  });
});
