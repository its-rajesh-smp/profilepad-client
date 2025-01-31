import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { Layout } from "react-grid-layout";
import { createNewLayoutItem, setGridLayouts } from "../reducers/grid.reducer";
import { createGridItem } from "../services/grid.service";
import { TGridItemVariant } from "../types/dashboard-item.type";

export const createNewLayoutItemAct = (
  currentScreenSize: string,
  newLayout: Layout[],
  droppingItem: Layout,
  variant: TGridItemVariant,
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
    dispatch(setGridLayouts(currentLayouts));
    const res = await createGridItem({ layouts: currentLayouts, newItem });
    dispatch(createNewLayoutItem(res.data));
  };
};
