import axiosInterceptors from "@/setup/axios.conf";
import { useState } from "react";

// Custom hook to manage the loader
export const useApiLoader = () => {
  const [loading, setLoading] = useState(false);

  // Request interceptor
  axiosInterceptors.interceptors.request.use(
    (config) => {
      setLoading(true); // Show loader when a request starts
      return config;
    },
    (error) => {
      setLoading(false); // Hide loader if the request fails
      return Promise.reject(error);
    },
  );

  // Response interceptor
  axiosInterceptors.interceptors.response.use(
    (response) => {
      setLoading(false); // Hide loader when the request completes
      return response;
    },
    (error) => {
      setLoading(false); // Hide loader if the response fails
      return Promise.reject(error);
    },
  );

  return { loading };
};
