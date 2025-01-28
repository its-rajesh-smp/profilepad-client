import axiosInterceptors from "@/setup/axios.conf";

export const checkDashboardSlugAvailability = (slug: string) =>
  axiosInterceptors.get(`/dashboard/${slug}/availability`);

export const getUserDashboard = () => axiosInterceptors.get(`/dashboard`);

export const updateDashboard = (data: any) =>
  axiosInterceptors.patch(`/dashboard`, data);
