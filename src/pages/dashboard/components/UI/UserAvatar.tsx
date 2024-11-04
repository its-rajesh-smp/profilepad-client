import { BiImage } from "react-icons/bi";
import ActionButtonWithInput from "./ActionButtonWithInput";
import Avatar from "@/common/components/UI/Avatar";
import { updateProfile } from "@/pages/auth/services/user.service";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { setUser } from "@/pages/auth/reducers/auth.reducer";

function UserAvatar() {
  const user = useAppSelector((state) => state.authSlice.user);
  const dispatch = useAppDispatch();

  const onSaveBtnClick = async (data: any) => {
    const response = await updateProfile(user?.id, data);
    dispatch(setUser(response.data.user));
  };

  return (
    <div className="relative">
      <Avatar src={user?.profileImageSrc} className="h-48 w-48" />
      <ActionButtonWithInput
        onSubmit={onSaveBtnClick}
        fieldName="profileImageSrc"
        type="image"
        triggerClassName="absolute bottom-2 right-2"
        icon={<BiImage />}
      />
    </div>
  );
}

export default UserAvatar;
