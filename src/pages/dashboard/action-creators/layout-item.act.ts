import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { setGridLayoutConfig } from "../reducers/grid-layout-config.reducer";
import {
  addNewLayoutItem,
  setLayoutItems,
} from "../reducers/layout-items.reducer";
import {
  createLayoutItem,
  deleteLayoutItem,
} from "../services/layout-item.service";
import axiosInterceptors from "@/setup/axios.conf";
import { updateGridLayoutConfig } from "../services/dashboard.service";

export const createLayoutAct = (data: any) => {
  return async (dispatch: AppDispatch, _getState: () => RootState) => {
    const layoutResponse = await createLayoutItem({ data });
    const { updatedDashboard, layoutItem } = layoutResponse?.data;
    console.log(axiosInterceptors);

    // Dispatch the actions
    dispatch(setGridLayoutConfig(updatedDashboard.gridLayoutConfig));
    dispatch(addNewLayoutItem(layoutItem));
  };
};

export const deleteLayoutItemAct = (id: string) => {
  return async (dispatch: AppDispatch, _getState: () => RootState) => {
    const response = await deleteLayoutItem(id);
    const { gridLayoutConfig, layoutItems } = response.data;

    // Dispatch the actions
    dispatch(setGridLayoutConfig(gridLayoutConfig));
    dispatch(setLayoutItems(layoutItems));
  };
};

export const resizeGridLayoutItem = (id: string, w: number, h: number) => {
  return async (dispatch: AppDispatch, _getState: () => RootState) => {
    const { layout, currentBreakpoint } = _getState().gridLayoutConfigSlice;

    const updatedLayout = {
      ...layout,
      [currentBreakpoint]: layout[currentBreakpoint].map((item) => {
        if (item.i === id) {
          return { ...item, w, h };
        }
        return item;
      }),
    };

    dispatch(setGridLayoutConfig(updatedLayout));
    await updateGridLayoutConfig({
      updatedGridLayoutConfig: updatedLayout,
    });
  };
};
