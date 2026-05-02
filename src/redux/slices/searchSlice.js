import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;
