import axiosInterceptors from "@/setup/axios.conf";

export const createGridItem = (data: any) =>
  axiosInterceptors.post("grid-item", data);
