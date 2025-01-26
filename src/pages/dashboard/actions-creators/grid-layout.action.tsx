import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { Layout } from "react-grid-layout";
import { setGridLayouts } from "../reducers/grid.reducer";

export const createNewLayoutItemAct = (
  currentScreenSize: string,
  newLayout: Layout[],
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const currentLayouts = { ...getState().dashboardReducer.gridSlice.layouts };
    console.log(currentLayouts);
    currentLayouts[currentScreenSize] = newLayout;
    dispatch(setGridLayouts(currentLayouts));
  };
};
