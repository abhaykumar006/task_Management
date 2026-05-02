import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { loading } = loadingSlice.actions;
export default loadingSlice.reducer;
