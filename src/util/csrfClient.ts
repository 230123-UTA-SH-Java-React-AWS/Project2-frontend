import axios from "axios";
import { BASE_URL, GAME_PORT } from "../static/defaults";

const csrfClient = axios.create({
  baseURL:`http://${BASE_URL}:${GAME_PORT}/api`,
  withCredentials: true, // This is important for sending and receiving cookies
});

export default csrfClient;
