import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import searchReducer from "./slices/searchSlice";
import modalReducer from "./slices/modalSlice";
import allTasksReducer from "./slices/alltasksSlice";
import taskManagementReducer from "./slices/tasksManagementSlice";
import loadingReducer from "./slices/loadingSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  modal: modalReducer,
  allTasks: allTasksReducer,
  taskManagement: taskManagementReducer,
  loading: loadingReducer,
});

export default rootReducer;
