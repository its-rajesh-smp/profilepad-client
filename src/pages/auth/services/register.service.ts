import axiosInterceptors from "@/setup/axios.conf";

export const createAccount = (data: any) =>
  axiosInterceptors.post("/user/register", { data });

export const verifyUser = () => axiosInterceptors.get(`/user/verify`);

export const loginWithGoogle = (data: any) =>
  axiosInterceptors.post("/user/google-login", data);
