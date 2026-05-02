const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const URL = {
  BASE_URL: BASE_URL,
  SIGNUP_URL: `${BASE_URL}/auth/signup`,
  LOGIN_URL: `${BASE_URL}/auth/login`,
  LOGOUT_URL: `${BASE_URL}/auth/logout`,
  TASK_URL: `${BASE_URL}/tasks`,
};
