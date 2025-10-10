import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000/api", // your Flask base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Automatically attach token (if available)
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // or sessionStorage if you prefer
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
