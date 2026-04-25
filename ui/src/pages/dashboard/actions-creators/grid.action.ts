import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { Layout } from "react-grid-layout";
import { setCurrentSelectedGridItemId } from "../reducers/dashboard.reducer";
import {
  createNewLayoutItem,
  deleteGridLayoutItem,
  setGridLayouts,
  updateGridLayoutItem,
} from "../reducers/grid.reducer";
import { updateDashboard } from "../services/dashboard.service";
import {
  createGridItem,
  deleteAGridItem,
  updateAGridItem,
  uploadFileAndUpdateAGridItem,
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

    const otherScreenSize = currentScreenSize === "lg" ? "xs" : "lg";

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
    dispatch(createNewLayoutItem(newItem));
    createGridItem({ layouts: currentLayouts, newItem });
  };
};

export const updateAGridItemAct = (id: string, dataToUpdate: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(updateGridLayoutItem({ id, dataToUpdate }));
    await updateAGridItem(id, dataToUpdate);
  };
};

export const uploadFileAndUpdateAGridItemAct = (
  id: string,
  fieldToUpdate: any,
  formData: FormData,
) => {
  return async (dispatch: AppDispatch) => {
    const res = await uploadFileAndUpdateAGridItem(id, fieldToUpdate, formData);
    await dispatch(updateGridLayoutItem({ id, dataToUpdate: res.data }));
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

export const updateGridLayoutItemSizeAct = (
  id: string,
  newWidth: number,
  newHeight: number,
  currentScreenSize: string,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const updatedLayouts = { ...getState().gridSlice.layouts };

    updatedLayouts[currentScreenSize] = updatedLayouts[currentScreenSize].map(
      (item) => {
        if (item.i === id) {
          return {
            ...item,
            w: newWidth,
            h: newHeight,
          };
        }
        return item;
      },
    );

    dispatch(setGridLayouts(updatedLayouts));
    updateDashboard({ layouts: updatedLayouts });
  };
};
