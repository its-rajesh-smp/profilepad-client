import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { authenticate } from "../reducers/auth.reducer";
import { loginWithGoogle } from "../services/register.service";

export const googleLoginAct = (accessToken: string, slug?: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await loginWithGoogle({ accessToken, slug });
      const { authToken, user } = response.data;
      dispatch(authenticate({ authToken, user }));
    } catch (error) {
      throw error;
    }
  };
};
