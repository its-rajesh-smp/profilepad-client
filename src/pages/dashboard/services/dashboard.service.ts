import axiosInterceptors from "@/setup/axios.conf";

export const getDashboard = () => axiosInterceptors.get("/dashboard");

export const updateGridLayoutConfig = (data: any) =>
  axiosInterceptors.patch("/dashboard/grid-layout-config/update", data);
