import { describe, it, expect } from 'vitest';
import allTasksReducer, { setAllTasks, setSortBy, resetAllTasks, sortTasks } from '../../redux/slices/alltasksSlice';

describe('allTasksSlice', () => {
  const initialState = {
    tasks: [],
    sortBy: '',
  };

  const mockTasks = [
    { _id: '1', title: 'Task 1', priority: 'High', status: 'To Do', dueDate: '2026-03-01' },
    { _id: '2', title: 'Task 2', priority: 'Low', status: 'Completed', dueDate: '2026-03-05' },
    { _id: '3', title: 'Task 3', priority: 'Medium', status: 'In Progress', dueDate: '2026-03-03' },
  ];

  describe('setAllTasks', () => {
    it('should set tasks', () => {
      const nextState = allTasksReducer(initialState, setAllTasks(mockTasks));
      expect(nextState.tasks).toEqual(mockTasks);
    });

    it('should sort tasks by current sortBy', () => {
      const stateWithSort = { ...initialState, sortBy: 'priority' };
      const nextState = allTasksReducer(stateWithSort, setAllTasks(mockTasks));
      expect(nextState.tasks[0].priority).toBe('High');
    });
  });

  describe('setSortBy', () => {
    it('should set sortBy and sort tasks', () => {
      const stateWithTasks = { ...initialState, tasks: [...mockTasks] };
      const nextState = allTasksReducer(stateWithTasks, setSortBy('priority'));

      expect(nextState.sortBy).toBe('priority');
      expect(nextState.tasks[0].priority).toBe('High');
    });
  });

  describe('resetAllTasks', () => {
    it('should reset to initial state', () => {
      const stateWithTasks = { tasks: mockTasks, sortBy: 'priority' };
      const nextState = allTasksReducer(stateWithTasks, resetAllTasks());

      expect(nextState.tasks).toEqual([]);
      expect(nextState.sortBy).toBe('');
    });
  });
});

describe('sortTasks', () => {
  const mockTasks = [
    { _id: '1', title: 'Task 1', priority: 'Low', status: 'To Do', dueDate: '2026-03-05', createdAt: '2026-02-01' },
    { _id: '2', title: 'Task 2', priority: 'High', status: 'Completed', dueDate: '2026-03-01', createdAt: '2026-02-15' },
    { _id: '3', title: 'Task 3', priority: 'Medium', status: 'In Progress', dueDate: '2026-03-03', createdAt: '2026-02-10' },
  ];

  it('should return original array when sortBy is empty', () => {
    const result = sortTasks(mockTasks, '');
    expect(result).toEqual(mockTasks);
  });

  it('should sort by dueDate ascending', () => {
    const result = sortTasks(mockTasks, 'dueDateAsc');
    expect(result[0].dueDate).toBe('2026-03-01');
    expect(result[2].dueDate).toBe('2026-03-05');
  });

  it('should sort by createdAt descending', () => {
    const result = sortTasks(mockTasks, 'createdAtDesc');
    expect(result[0].createdAt).toBe('2026-02-15');
    expect(result[2].createdAt).toBe('2026-02-01');
  });

  it('should sort by priority (High > Medium > Low)', () => {
    const result = sortTasks(mockTasks, 'priority');
    expect(result[0].priority).toBe('High');
    expect(result[2].priority).toBe('Low');
  });

  it('should sort by progress ascending (To Do > In Progress > Completed)', () => {
    const result = sortTasks(mockTasks, 'progress-asc');
    expect(result[0].status).toBe('To Do');
    expect(result[2].status).toBe('Completed');
  });

  it('should sort by progress descending (Completed > In Progress > To Do)', () => {
    const result = sortTasks(mockTasks, 'progress-desc');
    expect(result[0].status).toBe('Completed');
    expect(result[2].status).toBe('To Do');
  });
});
