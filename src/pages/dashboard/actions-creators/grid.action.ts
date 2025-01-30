import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { Layout } from "react-grid-layout";
import { createNewLayoutItem, setGridLayouts } from "../reducers/grid.reducer";
import { createGridItem } from "../services/grid.service";
import { TDashboardGridCard } from "../types/dashboard-item.type";

export const createNewLayoutItemAct = (
  currentScreenSize: string,
  newLayout: Layout[],
  droppingItem: Layout,
  variant: TDashboardGridCard,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const currentLayouts = { ...getState().dashboardReducer.gridSlice.layouts };

    let otherScreenSize = currentScreenSize === "lg" ? "xs" : "lg";
    currentLayouts[currentScreenSize] = newLayout;
    currentLayouts[otherScreenSize] = [
      ...currentLayouts[otherScreenSize],
      droppingItem,
    ];

    const newItem = {
      id: droppingItem.i,
      variant,
    };
    const res = await createGridItem({ layouts: currentLayouts, newItem });
    dispatch(setGridLayouts(currentLayouts));
    dispatch(createNewLayoutItem(res.data));
  };
};
