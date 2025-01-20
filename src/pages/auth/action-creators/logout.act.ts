import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { logout } from "../reducers/auth.reducer";

export const logoutAct = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(logout());
  };
};
