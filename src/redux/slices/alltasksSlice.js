import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  sortBy: "",
};
const allTasksSlice = createSlice({
  name: "allTasks",
  initialState,
  reducers: {
    setAllTasks: (state, action) => {
      state.tasks = sortTasks([...action.payload], state.sortBy);
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.tasks = sortTasks([...state.tasks], action.payload);
    },

    /* Removes User's tasks from redux */
    resetAllTasks: () => initialState,
  },
});

export const sortTasks = (tasks, sortBy) => {
  if (!sortBy) return [...tasks];

  //a-a b-b
  return [...tasks].sort((a, b) => {
    switch (sortBy) {
      case "dueDateAsc": {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      case "createdAtDesc": {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      case "priority": {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      case "progress-asc": {
        const ascProgressOrder = { "To Do": 1, "In Progress": 2, Completed: 3 };
        return ascProgressOrder[a.status] - ascProgressOrder[b.status];
      }
      case "progress-desc": {
        const descProgressOrder = {
          "To Do": 1,
          "In Progress": 2,
          Completed: 3,
        };
        return descProgressOrder[b.status] - descProgressOrder[a.status];
      }
      default:
        return 0;
    }
  });
};

export const { setAllTasks, setSortBy, resetAllTasks } = allTasksSlice.actions;
export default allTasksSlice.reducer;
