import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdding: false,
  isEditing: false,
  currentTask: null,
};

const taskManagementSlice = createSlice({
  name: "taskManagement",
  initialState,
  reducers: {
    startAdding: (state) => {
      state.isAdding = true;
      state.isEditing = false;
      state.currentTask = null;
    },
    startEditing: (state, action) => {
      state.isAdding = false;
      state.isEditing = true;
      state.currentTask = action.payload;
      console.log("Editing", state.currentTask);
    },
    closeForm: (state) => {
      state.isAdding = false;
      state.isEditing = false;
      state.currentTask = null;
    },
  },
});

export const { startAdding, startEditing, closeForm } =
  taskManagementSlice.actions;
export default taskManagementSlice.reducer;
