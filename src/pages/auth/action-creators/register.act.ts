import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { authenticate } from "../reducers/auth.reducer";
import { createAccount, verifyUser } from "../services/register.service";
import { setAppMetadataBasedOnUser } from "@/common/utils/app_metadata.util";

export const registerAct = (formData: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    const slug = localStorage.getItem("slug");
    if (!slug) return;

    const response = await createAccount({ ...formData, slug });
    localStorage.removeItem("slug");

    const { authToken, user } = response.data;
    dispatch(authenticate({ authToken, user }));
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
    return true;
  };
};
