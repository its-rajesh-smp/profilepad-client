import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { updateProfile } from "@/pages/auth/services/user.service";
import UserAvatar from "./UI/UserAvatar";
import { motion } from "framer-motion";

function Profile() {
  const user = useAppSelector((state) => state.authSlice.user);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="sticky left-0 top-20 flex h-full w-full flex-col gap-2 lg:w-[30%]"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 lg:items-start">
        <UserAvatar />
        <h1 className="text-center text-3xl font-bold md:text-left lg:text-5xl">
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
        <p className="text-center lg:text-left">
          <AutoSaveTextField
            onChange={updateProfile}
            fieldToUpdate="headline"
            id={user.id}
          >
            {user.headline || "Strong team player. Quick learner."}
          </AutoSaveTextField>
        </p>
      </div>
    </motion.div>
  );
}

export default Profile;
