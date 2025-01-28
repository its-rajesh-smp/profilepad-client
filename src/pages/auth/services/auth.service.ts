import axiosInterceptors from "@/setup/axios.conf";

export const fetchUser = () => axiosInterceptors.get(`/user/fetch`);

export const createAccount = (data: any) =>
  axiosInterceptors.post("/user/register", data);

export const login = (data: any) => axiosInterceptors.post("/user/login", data);

export const loginWithGoogle = (data: any) =>
  axiosInterceptors.post("/user/google-login", data);

export const updateProfile = (_id: string, data: any) =>
  axiosInterceptors.patch(`/user/update/profile`, { data });
