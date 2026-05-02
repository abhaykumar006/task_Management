import { describe, it, expect } from 'vitest';
import authReducer, { loginSuccess, logout } from '../../redux/slices/authSlice';

describe('authSlice', () => {
  const initialState = {
    user: null,
    isAuthenticated: false,
  };

  describe('loginSuccess', () => {
    it('should set user and isAuthenticated to true', () => {
      const user = { name: 'Test User', email: 'test@example.com' };
      const nextState = authReducer(initialState, loginSuccess({ user }));

      expect(nextState.user).toEqual(user);
      expect(nextState.isAuthenticated).toBe(true);
    });

    it('should overwrite existing user', () => {
      const initialUserState = {
        user: { name: 'Old User' },
        isAuthenticated: true,
      };
      const newUser = { name: 'New User' };
      const nextState = authReducer(initialUserState, loginSuccess({ user: newUser }));

      expect(nextState.user).toEqual(newUser);
      expect(nextState.isAuthenticated).toBe(true);
    });
  });

  describe('logout', () => {
    it('should reset user to null and isAuthenticated to false', () => {
      const authenticatedState = {
        user: { name: 'Test User' },
        isAuthenticated: true,
      };
      const nextState = authReducer(authenticatedState, logout());

      expect(nextState.user).toBeNull();
      expect(nextState.isAuthenticated).toBe(false);
    });
  });
});
