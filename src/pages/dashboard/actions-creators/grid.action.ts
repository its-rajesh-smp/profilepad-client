import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { Layout } from "react-grid-layout";
import { setGridLayouts } from "../reducers/grid.reducer";
import { createGridItem } from "../services/grid.service";
import { ISidebarDroppingItem } from "../types/left-sidebar-item.type";

export const createNewLayoutItemAct = (
  currentScreenSize: string,
  newLayout: Layout[],
  droppingItem: ISidebarDroppingItem,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const currentLayouts = { ...getState().dashboardReducer.gridSlice.layouts };
    currentLayouts[currentScreenSize] = newLayout;

    await createGridItem({ layouts: currentLayouts, newItem: droppingItem });

    dispatch(setGridLayouts(currentLayouts));
  };
};
