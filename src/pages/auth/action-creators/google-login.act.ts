import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { authenticate } from "../reducers/auth.reducer";
import { loginWithGoogle } from "../services/auth.service";
import { NavigateFunction } from "react-router-dom";

export const googleLoginAct = (
  accessToken: string,
  slug?: string,
  navigate?: NavigateFunction,
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await loginWithGoogle({ accessToken, slug });
      const { authToken, user } = response.data;
      dispatch(authenticate({ authToken, user }));
    } catch (error: any) {
      if (error?.message === "Slug not provided") {
        navigate?.("/register");
      }
      throw error;
    }
  };
};
