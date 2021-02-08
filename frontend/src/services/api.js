import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3001";
console.log("ENV:", process.env);

const api = {
  get: (endpoint) => axios.get(baseUrl + endpoint),
  create: (endpoint, data) => axios.post(baseUrl + endpoint, data),
  remove: (endpoint) => axios.delete(baseUrl + endpoint),
};

export default api;
