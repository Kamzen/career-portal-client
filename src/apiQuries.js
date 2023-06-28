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
    const resp = await axiosInstance.get(`/auth/isUserLoggedIn`);

    return resp?.data.user;
  },

  editBasicInformation: async (formData) => {
    const resp = await axiosInstance.put(
      `/student/editBasicInformation/${formData.id}`,
      formData
    );

    return resp?.data;
  },

  addAddress: async (formData) => {
    const resp = await axiosInstance.post("/student/addAddress", formData);

    return resp?.data;
  },

  editAddress: async (formData) => {
    const resp = await axiosInstance.put(
      `/student/editAddress/${formData.id}`,
      formData
    );

    return resp?.data;
  },

  addBasicEducation: async (formData) => {
    const resp = await axiosInstance.post(
      "/student/addBasicEducation",
      formData
    );

    return resp?.data;
  }
};

export default ApiQueries;
