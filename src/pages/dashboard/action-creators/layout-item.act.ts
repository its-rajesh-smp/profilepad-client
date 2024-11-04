import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { setGridLayoutConfig } from "../reducers/grid-layout-config.reducer";
import { addNewLayoutItem } from "../reducers/layout-items.reducer";
import { createLayoutItem } from "../services/layout-item.service";

export const createLayoutAct = (data: any) => {
  return async (dispatch: AppDispatch, _getState: () => RootState) => {
    const layoutResponse = await createLayoutItem({ data });
    console.log(layoutResponse);
    const { updatedDashboard, layoutItem } = layoutResponse?.data;

    // Dispatch the actions
    dispatch(setGridLayoutConfig(updatedDashboard.gridLayoutConfig));
    dispatch(addNewLayoutItem(layoutItem));
  };
};
