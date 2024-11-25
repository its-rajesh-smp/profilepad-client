import Editor from "@/common/components/Editor/Editor";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { debounce } from "@/common/utils/debounce.util";
import { updateProfile } from "@/pages/auth/services/user.service";
import { motion } from "framer-motion";
import { useCallback } from "react";
import UserAvatar from "./UI/UserAvatar";

function Profile() {
  const user = useAppSelector((state) => state.authSlice.user);
  const onTextChange = (text: string) => {
    debouncedUpdateOnDb(text);
  };

  const debouncedUpdateOnDb = useCallback(
    debounce((value: string) => {
      // Update simple field
      const updatedField = { headline: value };
      updateProfile(user?.id, updatedField);
    }, 500),
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative top-0 flex w-full flex-col gap-5 p-5 lg:sticky lg:top-0 lg:w-[30%] lg:gap-2 lg:p-0"
    >
      <div className="flex w-full items-center justify-between gap-4 lg:flex-col lg:items-start">
        <UserAvatar />
        <h1 className="text-left text-3xl font-bold lg:text-5xl">
          <AutoSaveTextField
            onChange={updateProfile}
            fieldToUpdate="name"
            id={user.id}
          >
            {user.name || "John Doe"}
          </AutoSaveTextField>
        </h1>
      </div>

      <div>
        <Editor value={user.headline} onChange={onTextChange} />
      </div>
    </motion.div>
  );
}

export default Profile;
