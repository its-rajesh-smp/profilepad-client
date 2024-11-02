import axiosInterceptors from "@/setup/axios.conf";
import { DashboardCardType } from "../types/dashboard.type";

export const getLayouts = () => axiosInterceptors.get("/dashboard/layout");

export const createLayout = (type: DashboardCardType) =>
  axiosInterceptors.post("/dashboard/layout/create", { type });
