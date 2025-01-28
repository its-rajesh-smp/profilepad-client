import axiosInterceptors from "@/setup/axios.conf";

export const checkDashboardSlugAvailability = (slug: string) =>
  axiosInterceptors.get(`/dashboard/${slug}/availability`);
