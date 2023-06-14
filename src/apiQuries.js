import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/v1";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`
  }
});

const ApiQueries = {
  registerUser: async (formData) => {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/register`,
      formData
    );

    return data;
  },
  loginUser: async (formData) => {
    const { data } = await axios.post(`${API_BASE_URL}/auth/login`, formData);

    return data;
  },

  userInfo: async () => {
    const { data } = await axiosInstance.get(`/auth/isUserLoggedIn`);

    return data.user;
  }
};

export default ApiQueries;
