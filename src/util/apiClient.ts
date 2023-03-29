import axios from "axios";
import Cookies from "js-cookie";
import { store } from "../redux/store";
import { BASE_URL, GAME_PORT } from "../static/defaults";

const apiClient = axios.create({
  baseURL: `http://${BASE_URL}:${GAME_PORT}/api`,
  withCredentials: true, // This is important for sending and receiving cookies
});

apiClient.interceptors.request.use(
  (config) => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    if (csrfToken) {
      config.headers["X-XSRF-TOKEN"] = csrfToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
