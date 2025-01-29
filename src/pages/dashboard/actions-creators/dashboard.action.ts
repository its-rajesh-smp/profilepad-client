import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { Layouts } from "react-grid-layout";
import { setGridLayoutItems, setGridLayouts } from "../reducers/grid.reducer";
import {
  getUserDashboard,
  updateDashboard,
} from "../services/dashboard.service";
import { getGridItems } from "../services/grid.service";

export const getUserDashboardAct = () => {
  return async (dispatch: AppDispatch) => {
    const dashboardRes = await getUserDashboard();
    const gridItemsRes = await getGridItems();
    dispatch(setGridLayouts(dashboardRes.data.layouts));
    dispatch(setGridLayoutItems(gridItemsRes.data));
  };
};

export const updateDashboardGridAct = (updatedLayouts: Layouts) => {
  return async (dispatch: AppDispatch) => {
    await updateDashboard({ layouts: updatedLayouts });
    dispatch(setGridLayouts(updatedLayouts));
  };
};
