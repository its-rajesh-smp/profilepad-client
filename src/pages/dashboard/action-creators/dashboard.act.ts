import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { setGridLayoutConfig } from "../reducers/grid-layout-config.reducer";
import { setLayoutItems } from "../reducers/layout-items.reducer";
import { getDashboard } from "../services/dashboard.service";

export const getDashboardAct = () => {
  return async (dispatch: AppDispatch) => {
    const layoutResponse = await getDashboard();
    const { gridLayoutConfig, layoutItems } = layoutResponse.data;

    // Dispatch the actions
    dispatch(setGridLayoutConfig(gridLayoutConfig));
    dispatch(setLayoutItems(layoutItems));
  };
};
