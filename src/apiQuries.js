import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/v1";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`
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
  },

  addAddress: async (formData) => {

    const { data } = await axiosInstance.post("/student/addAddress", formData);

    return data;
  },

  editAddress: async (formData) => {
    const { data } = await axiosInstance.post(`/student/editAddress/${formData.id}`, formData)

    return data;
  }
};

export default ApiQueries;
