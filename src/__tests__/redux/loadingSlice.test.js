import { describe, it, expect } from 'vitest';
import loadingReducer, { loading } from '../../redux/slices/loadingSlice';

describe('loadingSlice', () => {
  const initialState = {
    loading: false,
  };

  describe('loading', () => {
    it('should set loading to true', () => {
      const nextState = loadingReducer(initialState, loading(true));
      expect(nextState.loading).toBe(true);
    });

    it('should set loading to false', () => {
      const loadingState = { loading: true };
      const nextState = loadingReducer(loadingState, loading(false));
      expect(nextState.loading).toBe(false);
    });
  });
});
