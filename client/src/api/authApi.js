import axiosClient from "./axiosClient";
const authApi = {
  login: async ({ username, password }) => {
    const url = "/user/login";
    return await axiosClient.post(url);
  },
  register: async ({ username, email, password }) => {
    const url = "/user/register";
    return await axiosClient.post(url);
  },
};

export default authApi;
