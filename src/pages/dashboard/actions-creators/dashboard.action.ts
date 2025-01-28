import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { Layouts } from "react-grid-layout";
import { setGridLayouts } from "../reducers/grid.reducer";
import {
  getUserDashboard,
  updateDashboard,
} from "../services/dashboard.service";

export const getUserDashboardAct = () => {
  return async (dispatch: AppDispatch) => {
    const response = await getUserDashboard();
    dispatch(setGridLayouts(response.data.layouts));
  };
};

export const updateDashboardGridAct = (updatedLayouts: Layouts) => {
  return async (dispatch: AppDispatch) => {
    await updateDashboard({ layouts: updatedLayouts });
    dispatch(setGridLayouts(updatedLayouts));
  };
};
