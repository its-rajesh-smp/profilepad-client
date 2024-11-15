import { DashboardCardType } from "../types/dashboard.type";

export const getToolbarVisibilityByType = (type: DashboardCardType) => {
  switch (type) {
    case "section":
      return true;
    default:
      return false;
  }
};
