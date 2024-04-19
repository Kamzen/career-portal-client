import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/v1";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
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
  },
  editBasicEducation: async (formData) => {
    const resp = await axiosInstance.put(
      `/student/editBasicEducation/${formData.educationId}`,
      formData
    );

    return resp?.data;
  },
  addTertiaryEducation: async (formData) => {
    const resp = await axiosInstance.post(
      `/student/addTertiaryEducation`,
      formData
    );

    return resp?.data;
  },

  editTertiaryEducation: async (formData) => {
    const resp = await axiosInstance.put(
      `/student/editTertiaryEducation/${formData.tertiaryEducationId}`,
      formData
    );

    return resp?.data;
  },

  deleteTertiaryEducation: async (id) => {
    const resp = await axiosInstance.delete(
      `/student/deleteTertiaryEducation/${id}`
    );

    return resp?.data;
  },

  addProfessionalSkill: async (formData) => {
    const resp = await axiosInstance.post(
      "/student/addProfessionalSkill",
      formData
    );

    return resp?.data;
  },

  deleteProfessionalSkill: async (id) => {
    const resp = await axiosInstance.delete(
      `/student/deleteProfessionalSkill/${id}`
    );

    return resp?.data;
  },

  addCertification: async (formData) => {
    const resp = await axiosInstance.post(
      `/student/addCertification`,
      formData
    );

    return resp?.data;
  },

  editCertification: async (formData, id) => {
    const resp = await axiosInstance.put(
      `/student/editCertification/${id}`,
      formData
    );

    return resp?.data;
  },

  deleteCertification: async (id) => {
    const resp = await axiosInstance.delete(
      `/student/deleteCertification/${id}`
    );

    return resp?.data;
  }
};

export default ApiQueries;
