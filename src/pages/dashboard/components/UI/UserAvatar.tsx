import Avatar from "@/common/components/UI/Avatar";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { setUser } from "@/pages/auth/reducers/auth.reducer";
import { updateProfile } from "@/pages/auth/services/user.service";
import { BiImage } from "react-icons/bi";
import ActionButtonWithInput from "./ActionButtonWithInput";

function UserAvatar() {
  const user = useAppSelector((state) => state.authSlice.user);
  const editMode = useAppSelector((state) => state.authSlice.editMode);
  const dispatch = useAppDispatch();

  const onSaveBtnClick = async (data: any) => {
    const response = await updateProfile(user?.id, data);
    dispatch(setUser(response.data.user));
  };
  return (
    <div className="relative">
      <Avatar
        fallbackText={user?.name || "John Doe"}
        src={user?.profileImageSrc}
        className="h-48 w-48"
      />
      {editMode && (
        <ActionButtonWithInput
          isRemoveBtn={user?.profileImageSrc?.length}
          onSubmit={onSaveBtnClick}
          tooltipText="Update profile image"
          fieldName="profileImageSrc"
          type="image"
          triggerClassName="absolute bottom-2 right-2"
          icon={<BiImage />}
        />
      )}
    </div>
  );
}

export default UserAvatar;
