import axiosInterceptors from "@/setup/axios.conf";

export const getDashboard = () => axiosInterceptors.get(`/dashboard`);

export const getDashboardPreview = (slug: string | undefined) =>
  axiosInterceptors.get(`/dashboard/preview/${slug}`);

export const updateGridLayoutConfig = (data: any) =>
  axiosInterceptors.patch("/dashboard/grid-layout-config/update", data);

export const resetDashboard = () => axiosInterceptors.patch("/dashboard/reset");

export const updateDashboardSetting = (data: any) =>
  axiosInterceptors.patch("/dashboard/setting/update", {
    dashboardSetting: data,
  });
