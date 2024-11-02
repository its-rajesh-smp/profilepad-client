import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import {
  addNewLayoutItem,
  setLayoutItems,
} from "../reducers/layout-items.reducer";
import { updateLayout } from "../reducers/layout.reducer";
import { createLayout, getLayouts } from "../services/layout.service";
import { DashboardCardType } from "../types/dashboard.type";

/**
 * Creates a new layout item of a given type and appends it to the end of the current layout.
 * @param {DashboardCardType} type The type of the item to be created.
 * @returns {ThunkAction<void, RootState, unknown, Action<string>>} A thunk that dispatches the actions.
 */
export const createLayoutAct = (type: DashboardCardType) => {
  return async (dispatch: AppDispatch, _getState: () => RootState) => {
    const layoutResponse = await createLayout(type);
    const { layoutGroup, layoutItem } = layoutResponse?.data;

    // Dispatch the actions
    dispatch(updateLayout(layoutGroup.data));
    dispatch(addNewLayoutItem(layoutItem));
  };
};

/**
 * Updates the layout of the dashboard.
 * @param {ReactGridLayout.Layout[]} current - The current layout configuration.
 * @param {ReactGridLayout.Layouts} all - All layout configurations across different breakpoints.
 * @returns {ThunkAction<void, RootState, unknown, Action<string>>} A thunk that dispatches the actions.
 */
export const updateLayoutAct = ({
  all,
  current,
}: {
  current: ReactGridLayout.Layout[];
  all: ReactGridLayout.Layouts;
}) => {
  return async (_dispatch: AppDispatch) => {
    console.log(all, current);
  };
};

/**
 * Fetches the current layout of the dashboard from the server.
 * @returns {ThunkAction<void, RootState, unknown, Action<string>>} A thunk that dispatches the actions.
 */
export const getLayoutAct = () => {
  return async (dispatch: AppDispatch) => {
    const layoutResponse = await getLayouts();
    const { data, LayoutItem } = layoutResponse.data;

    // Dispatch the actions
    dispatch(updateLayout(data));
    dispatch(setLayoutItems(LayoutItem));
  };
};
