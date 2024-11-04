import axiosInterceptors from "@/setup/axios.conf";

export const updateProfile = (_id: string, data: any) =>
  axiosInterceptors.patch(`/user/update/profile`, { data });
