import axios from "axios";
import { URL } from "../utils/url";
import { persistor } from "../redux/store";

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${URL.SIGNUP_URL}`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${URL.LOGIN_URL}`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

 /* Removes User's token from localStorage */
export const logoutUser = async () => {
  localStorage.removeItem("token");
  try {
    await axios.post(
      `${URL.LOGOUT_URL}`
     
    ); 
  } catch (error) {
    console.error("Logout failed:", error.response?.data?.message);
  }
  persistor.purge();
};
