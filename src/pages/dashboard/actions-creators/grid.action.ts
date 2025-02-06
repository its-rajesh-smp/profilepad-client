import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { Layout } from "react-grid-layout";
import {
  createNewLayoutItem,
  deleteGridLayoutItem,
  setGridLayouts,
  updateGridLayoutItem,
} from "../reducers/grid.reducer";
import {
  createGridItem,
  deleteAGridItem,
  updateAGridItem,
} from "../services/grid.service";
import { TGridItemVariant } from "../types/dashboard-item.type";
import { setCurrentSelectedGridItemId } from "../reducers/dashboard.reducer";

export const createNewLayoutItemAct = (
  currentScreenSize: string,
  newLayout: Layout[],
  droppingItem: Layout,
  variant: TGridItemVariant,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const currentLayouts = { ...getState().gridSlice.layouts };

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

export const updateAGridItemAct = (id: string, dataToUpdate: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(updateGridLayoutItem({ id, dataToUpdate }));
    await updateAGridItem(id, dataToUpdate);
  };
};

export const deleteAGridItemAct = (id: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const currentSelectedLayoutItemId =
      getState().dashboardSlice.currentSelectedGridItemId;

    // Unselect the item if it is currently selected
    if (currentSelectedLayoutItemId === id) {
      dispatch(setCurrentSelectedGridItemId(""));
    }
    dispatch(deleteGridLayoutItem({ id }));

    const res = await deleteAGridItem(id);
    dispatch(setGridLayouts(res.data.layouts));
  };
};
