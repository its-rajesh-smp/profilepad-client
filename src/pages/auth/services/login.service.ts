import axiosInterceptors from "@/setup/axios.conf";

export const login = (data: any) =>
  axiosInterceptors.post("/user/login", { data });
