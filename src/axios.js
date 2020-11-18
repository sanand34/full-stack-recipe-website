import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.edamam.com",
});

export default instance;

export const base = axios.create({
  baseURL: "https://api.edamam.com",
});
