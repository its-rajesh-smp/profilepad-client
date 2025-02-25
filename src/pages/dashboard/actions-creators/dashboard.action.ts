import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { setIsAuthenticated } from "@/pages/auth/reducers/auth.reducer";
import { Layouts } from "react-grid-layout";
import { setCurrentDashboardSlug } from "../reducers/dashboard.reducer";
import { setGridLayoutItems, setGridLayouts } from "../reducers/grid.reducer";
import {
  getUserDashboard,
  getUserDashboardWithSlug,
  updateDashboard,
} from "../services/dashboard.service";

export const getUserDashboardAct = (slug?: string) => {
  return async (dispatch: AppDispatch) => {
    let dashboardRes = null;
    try {
      if (slug) {
        dispatch(setIsAuthenticated(false));
        dashboardRes = await getUserDashboardWithSlug(slug);
      } else {
        dashboardRes = await getUserDashboard();
      }
    } catch (error) {
      throw error;
    }
    const { dashboard, gridItems } = dashboardRes.data;
    dispatch(setGridLayouts(dashboard.layouts));
    dispatch(setGridLayoutItems(gridItems));
    dispatch(setCurrentDashboardSlug(dashboard.slug));
    sessionStorage.setItem("isFirstTime", "true");
  };
};

export const updateDashboardGridAct = (updatedLayouts: Layouts) => {
  return async (dispatch: AppDispatch) => {
    await updateDashboard({ layouts: updatedLayouts });
    dispatch(setGridLayouts(updatedLayouts));
  };
};
