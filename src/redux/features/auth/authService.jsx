import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
console.log(BACKEND_URL);
export const API_URL = `${BACKEND_URL}/api/users/`;

//register user

const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData, {
    withCredentials: true,
  });
  return response.data;
};

//login user

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};

//logout user

const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};

//get login status

const getLoginStatus = async () => {
  const response = await axios.get(API_URL + "getLoginStatus");
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  getLoginStatus,
};

export default authService;
