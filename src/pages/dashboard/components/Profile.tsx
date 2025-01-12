import Editor from "@/common/components/Editor/Editor";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { debounce } from "@/common/utils/debounce.util";
import { updateProfile } from "@/pages/auth/services/user.service";
import { motion } from "framer-motion";
import { useCallback } from "react";
import UserAvatar from "./UI/UserAvatar";

function Profile() {
  const { user, editMode } = useAppSelector((state) => state.authSlice);
  const { dashboardSetting } = useAppSelector(
    (state) => state.gridLayoutConfigSlice,
  );

  const onTextChange = (text: string) => {
    // If not in edit mode, return
    if (!editMode) return;
    debouncedUpdateOnDb(text);
  };

  /**
   * Debounced update on DB
   */
  const debouncedUpdateOnDb = useCallback(
    debounce((value: string) => {
      const updatedField = { headline: value };
      updateProfile(user?.id, updatedField);
    }, 500),
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className={`relative top-0 flex max-w-[500px] flex-col gap-5 p-5 lg:max-w-full ${dashboardSetting.profileAlignment === "top" ? "lg:w-[900px]" : "lg:sticky lg:top-0 lg:w-[40%]"} lg:gap-2 lg:p-0`}
    >
      <div className="flex w-full items-center justify-between gap-4 p-0 !pb-1 lg:flex-col lg:items-start lg:p-10">
        <UserAvatar />
        <h1 className="flex-1 text-left text-3xl font-bold lg:text-5xl">
          <AutoSaveTextField
            onChange={updateProfile}
            fieldToUpdate="name"
            id={user.id}
          >
            {user.name || "John Doe"}
          </AutoSaveTextField>
        </h1>
      </div>

      <div className="px-2 lg:px-10">
        <Editor
          editable={editMode}
          value={user.headline}
          onChange={onTextChange}
        />
      </div>
    </motion.div>
  );
}

export default Profile;
