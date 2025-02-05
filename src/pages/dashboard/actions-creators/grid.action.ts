import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { Layout } from "react-grid-layout";
import { updateCurrentSelectedGridItem } from "../reducers/dashboard.reducer";
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

export const updateAGridItemAct = (
  id: string,
  data: any,
  isUpdateReq: boolean = false,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const currentSelectedItem =
      getState().dashboardSlice.currentSelectedGridItem || null;

    if ((currentSelectedItem && data?.styles) || isUpdateReq) {
      dispatch(updateCurrentSelectedGridItem(data));
    }

    let dataToUpdate = { ...data };

    if ((currentSelectedItem && data?.styles) || isUpdateReq) {
      dataToUpdate = { ...currentSelectedItem, ...data };
    }

    dispatch(updateGridLayoutItem({ dataToUpdate, id }));
    await updateAGridItem(id, dataToUpdate);
  };
};

export const deleteAGridItemAct = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const res = await deleteAGridItem(id);
    dispatch(setGridLayouts(res.data.layouts));
    dispatch(deleteGridLayoutItem({ id }));
  };
};
