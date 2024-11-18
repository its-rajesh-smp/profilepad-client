import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { resetDashboard } from "@/pages/dashboard/reducers/grid-layout-config.reducer";
import { resetLayoutItems } from "@/pages/dashboard/reducers/layout-items.reducer";
import { logout } from "../reducers/auth.reducer";

export const logoutAct = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(resetDashboard());
    dispatch(resetLayoutItems());
    dispatch(logout());
  };
};
