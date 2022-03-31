import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.60.196:3333",
});
