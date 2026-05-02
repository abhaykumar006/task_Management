import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Modal } from '../../components/Modal';
import modalReducer from '../../redux/slices/modalSlice';
import tasksManagementReducer from '../../redux/slices/tasksManagementSlice';
import allTasksReducer from '../../redux/slices/alltasksSlice';

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      modal: modalReducer,
      taskManagement: tasksManagementReducer,
      allTasks: allTasksReducer,
    },
    preloadedState,
  });
};

describe('Modal Component', () => {
  let store;

  beforeEach(() => {
    const portalRoot = document.createElement('div');
    portalRoot.id = 'modal-root';
    document.body.appendChild(portalRoot);
    
    store = createTestStore({
      modal: { isOpen: false, contentKey: null },
      taskManagement: { isAdding: false, isEditing: false, currentTask: null },
      allTasks: { tasks: [], sortBy: '' },
    });
  });

  const renderWithProvider = (component) => {
    return render(<Provider store={store}>{component}</Provider>);
  };

  it('should not render when modal is closed', () => {
    renderWithProvider(<Modal />);
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
  });

  it('should render modal when open', () => {
    store = createTestStore({
      modal: { isOpen: true, contentKey: 'createTask' },
      taskManagement: { isAdding: true, isEditing: false, currentTask: null },
      allTasks: { tasks: [], sortBy: '' },
    });

    renderWithProvider(<Modal />);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText('Create task form')).toBeInTheDocument();
  });

  it('should close modal when overlay is clicked', () => {
    store = createTestStore({
      modal: { isOpen: true, contentKey: 'createTask' },
      taskManagement: { isAdding: true, isEditing: false, currentTask: null },
      allTasks: { tasks: [], sortBy: '' },
    });

    renderWithProvider(<Modal />);
    
    const portalRoot = document.getElementById('modal-root');
    const overlay = portalRoot.querySelector('.fixed.inset-0');
    
    fireEvent.click(overlay);
    
    const state = store.getState();
    expect(state.modal.isOpen).toBe(false);
  });
});
