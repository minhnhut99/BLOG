import axios from "axios";
const instance = axios.create({
  baseURL: "https://localhost:3000",
  timeout: 1000,
  headers: {},
});

export default instance;
