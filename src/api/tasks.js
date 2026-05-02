import api from "./axiosInstance";

/* Creating a Task */
export const createTask = async (data) => {
  try {
    const response = await api.post("", data);
    return response?.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

/* update task as per Task's id */
export const updateTask = async (data, taskId) => {
  try {
    const response = await api.put(`/${taskId}`, data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

/* deleting task as per task id */
export const deleteTask = async (taskId) => {
  try {
    const response = await api.delete(`/${taskId}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

// Get All Tasks from server
export const getTasks = async () => {
  try {
    const response = await api.get("");
    return response?.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};
