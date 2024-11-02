import axiosInterceptors from "@/setup/axios.conf";

export const updateLayoutItem = (id: string, data: any) =>
  axiosInterceptors.patch(`/layout-item/update/${id}`, { data });
