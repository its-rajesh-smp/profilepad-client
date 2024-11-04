import axiosInterceptors from "@/setup/axios.conf";

export const verifySlug = (slug: string) =>
  axiosInterceptors.post("/user/verify-slug", { slug });

export const createAccount = (data: any) =>
  axiosInterceptors.post("/user/register", { data });

export const verifyUser = () => axiosInterceptors.get(`/user/verify`);
