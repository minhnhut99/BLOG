import axios from "axios";

export const fetchData = async (endpoint, { body, ...customConfig } = {}) => {
  const token = localStorage.getItem("accesstoken");
  const headers = { "Content-Type": "application/json" };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: body ? "POST" : "GET",
    url: `localhost:5000/api/${endpoint}`,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.data = JSON.stringify(body);
  }

  return axios(config).then((e) => {
    const { data } = e;
    if (data.logout) {
      localStorage.removeItem("user");
      localStorage.removeItem("accesstoken");
      window.location.reload();
      return data;
    } else if (data.refreshPage) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return null;
    } else return data;
  });
};
