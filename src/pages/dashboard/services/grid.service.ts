import axiosInterceptors from "@/setup/axios.conf";

export const createGridItem = (data: any) =>
  axiosInterceptors.post("grid-item", data);

export const getGridItems = () => axiosInterceptors.get("grid-item/all");

export const updateAGridItem = (id: string, data: any) =>
  axiosInterceptors.patch(`grid-item/${id}`, data);

export const deleteAGridItem = (id: string) =>
  axiosInterceptors.delete(`grid-item/${id}`);
