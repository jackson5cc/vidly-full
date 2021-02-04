import axios from "axios";

const getMovies = () => axios.get("http://localhost:3001");

export const api = {
  getMovies,
};
