import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { setAppMetadataBasedOnUser } from "@/common/utils/app_metadata.util";
import { authenticate } from "../reducers/auth.reducer";
import { createAccount, verifyUser } from "../services/register.service";

export const registerAct = (formData: {
  email: string;
  password: string;
  slug: string;
}) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await createAccount(formData);
      const { authToken, user } = response.data;
      dispatch(authenticate({ authToken, user }));
    } catch (error) {
      throw error;
    }
  };
};

export const verifyUserAct = () => {
  return async (dispatch: AppDispatch) => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) return false;
    const response = await verifyUser();
    const { user } = response.data;
    setAppMetadataBasedOnUser(user);
    dispatch(authenticate({ user, authToken }));
  };
};
