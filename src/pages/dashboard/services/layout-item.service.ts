import axiosInterceptors from "@/setup/axios.conf";

export const updateLayoutItem = (id: string, data: any) =>
  axiosInterceptors.patch(`/layout-item/update/${id}`, { data });

export const createLayoutItem = (data: any) =>
  axiosInterceptors.post("/layout-item/create", data);
