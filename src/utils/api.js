import axios from "axios";

//  axios instance with base configuration
const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://e-commerce-api-ixoyjgks.on-forge.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor to add token to all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - clear auth data
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");

      // Redirect to login if not already there
      if (!window.location.pathname.startsWith("/auth")) {
        window.location.href = "/auth/login";
      }
    }
    return Promise.reject(error);
  },
);

export default api;

// // src/utils/api.js
// import axios from "axios";

// // Create axios instance with base configuration
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   timeout: 10000,
// });

// // Request interceptor to add token to all requests
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("auth_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// // Response interceptor to handle errors globally
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Token expired or invalid - clear auth data
//       localStorage.removeItem("auth_token");
//       localStorage.removeItem("user");

//       // Redirect to login if not already there
//       if (window.location.pathname !== "/login") {
//         window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   },
// );

// export default api;
