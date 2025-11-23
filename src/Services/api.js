
// export const API_BASE_URI =`http://127.0.0.1:8000/api/students/`;
import axios from "axios";

export const API_BASE_URI = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

