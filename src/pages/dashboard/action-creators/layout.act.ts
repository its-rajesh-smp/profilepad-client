import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { Layout } from "react-grid-layout";
import { addNewLayoutItem } from "../reducers/layout-items.reducer";
import { addNewLayout } from "../reducers/layout.reducer";
import { DashboardCardType, IDashboardCard } from "../types/dashboard.type";

/**
 * Creates a new layout item of a given type and appends it to the end of the current layout.
 * @param {DashboardCardType} type The type of the item to be created.
 * @returns {ThunkAction<void, RootState, unknown, Action<string>>} A thunk that dispatches the actions.
 */
export const createLayoutAct = (type: DashboardCardType) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    // Get the last layout
    const lastLayout =
      getState().layoutSlice.layout.lg[
        getState().layoutSlice.layout.lg.length - 1
      ];

    // Create a new layout
    const newLayout: Layout = {
      i: lastLayout.i + 1,
      x: 0,
      y: 1,
      w: 1,
      h: 1,
    };

    // Create a new layout item
    const newLayoutItem: IDashboardCard = {
      type,
      id: lastLayout.i + 1,
    };

    // Dispatch the actions
    dispatch(addNewLayout(newLayout));
    dispatch(addNewLayoutItem(newLayoutItem));
  };
};

export const updateLayoutAct = ({
  all,
  current,
}: {
  current: ReactGridLayout.Layout[];
  all: ReactGridLayout.Layouts;
}) => {
  return async (dispatch: AppDispatch) => {
    console.log(all, current);
  };
};
