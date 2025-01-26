import axiosInterceptors from "@/setup/axios.conf";

export const getUserGrid = () => axiosInterceptors.get("/dashboard");
