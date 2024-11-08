import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { setAppMetadataBasedOnUser } from "@/common/utils/app_metadata.util";
import { setEditMode, setUser } from "@/pages/auth/reducers/auth.reducer";
import { setGridLayoutConfig } from "../reducers/grid-layout-config.reducer";
import { setLayoutItems } from "../reducers/layout-items.reducer";
import {
  getDashboard,
  getDashboardPreview,
  resetDashboard,
} from "../services/dashboard.service";

export const getDashboardAct = () => {
  return async (dispatch: AppDispatch) => {
    const layoutResponse = await getDashboard();
    const { gridLayoutConfig, layoutItems } = layoutResponse.data;

    // Dispatch the actions
    dispatch(setGridLayoutConfig(gridLayoutConfig));
    dispatch(setLayoutItems(layoutItems));
    dispatch(setEditMode(true));
  };
};

export const getDashboardPreviewAct = (slug: string | undefined) => {
  return async (dispatch: AppDispatch) => {
    const { data } = await getDashboardPreview(slug);

    const { gridLayoutConfig, layoutItems, user } = data;
    setAppMetadataBasedOnUser(user);
    dispatch(setGridLayoutConfig(gridLayoutConfig));
    dispatch(setLayoutItems(layoutItems));
    dispatch(setUser(user));
    dispatch(setEditMode(false));
  };
};

export const resetDashboardAct = () => {
  return async (dispatch: AppDispatch) => {
    const layoutResponse = await resetDashboard();
    const { gridLayoutConfig, layoutItems } = layoutResponse.data;

    // Dispatch the actions
    dispatch(setGridLayoutConfig(gridLayoutConfig));
    dispatch(setLayoutItems(layoutItems));
    dispatch(setEditMode(true));
  };
};
