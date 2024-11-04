import axios, { AxiosError, AxiosResponse } from "axios";

const axiosInterceptors = axios.create({
  baseURL: "http://localhost:3000", // Replace with your backend URL and port
  timeout: 10000, // Optional: specify request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Optional: set default headers
    Authorization: `Bearer ${localStorage.getItem("authToken") || ""}`, // Optional: set authorization token
  },
});

axiosInterceptors.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    return {
      ...response,
      data: data?.data || data,
    };
  },
  (error: AxiosError) => {
    const { response } = error;
    const data: any = response?.data;
    const message = data?.message || error.message;
    return Promise.reject({
      ...error,
      message,
    });
  },
);

export default axiosInterceptors;
