import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /* Hydrates redux with user info  */
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },

    /* re-estabilshes User in redux to null */
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
