import axiosInterceptors from "@/setup/axios.conf";

export const getLayouts = () => axiosInterceptors.get("/dashboard/layout");

export const createLayout = (data: any) =>
  axiosInterceptors.post("/dashboard/layout/create", data);

export const updateLayoutGroup = (layoutGroup: ReactGridLayout.Layouts) =>
  axiosInterceptors.patch("/dashboard/layout/update", { layoutGroup });
