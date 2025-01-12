import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { setAppMetadataBasedOnUser } from "@/common/utils/app_metadata.util";
import { setEditMode, setUser } from "@/pages/auth/reducers/auth.reducer";
import {
  setDashboardSetting,
  setGridLayoutConfig,
} from "../reducers/grid-layout-config.reducer";
import { setLayoutItems } from "../reducers/layout-items.reducer";
import {
  getDashboard,
  getDashboardPreview,
  resetDashboard,
  updateDashboardSetting,
} from "../services/dashboard.service";
import { RootState } from "@/store/store";

export const getDashboardAct = () => {
  return async (dispatch: AppDispatch) => {
    const layoutResponse = await getDashboard();
    const { gridLayoutConfig, layoutItems, dashboardSetting } =
      layoutResponse.data;

    // Dispatch the actions
    dispatch(setGridLayoutConfig(gridLayoutConfig));
    dispatch(setLayoutItems(layoutItems));
    dispatch(setDashboardSetting(dashboardSetting));
    dispatch(setEditMode(true));
  };
};

export const getDashboardPreviewAct = (slug: string | undefined) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await getDashboardPreview(slug);
      const { gridLayoutConfig, layoutItems, user } = data;
      console.log(data);
      if (!user) {
        return false;
      }

      setAppMetadataBasedOnUser(user);
      dispatch(setGridLayoutConfig(gridLayoutConfig));
      dispatch(setLayoutItems(layoutItems));
      dispatch(setUser(user));
      dispatch(setEditMode(false));

      return true;
    } catch (error) {
      return false;
    }
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

export const updateDashboardSettingAct = (data: any) => {
  return async (dispatch: AppDispatch, _getState: () => RootState) => {
    const dashboardSetting = _getState().gridLayoutConfigSlice.dashboardSetting;
    dispatch(setDashboardSetting(data));
    await updateDashboardSetting({ ...dashboardSetting, ...data });
  };
};
