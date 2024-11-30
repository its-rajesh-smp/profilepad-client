import { APP_ENV } from "@/common/constants/app.const";
import { motion } from "framer-motion";
import { IoExtensionPuzzle } from "react-icons/io5";

function GoTo2dWorld() {
  if (APP_ENV !== "Development") return null;
  return (
    <motion.button
      initial={{ opacity: 0, scale: 5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
      type="button"
      className="fixed right-5 top-5 rounded-full border p-5 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <IoExtensionPuzzle />
    </motion.button>
  );
}

export default GoTo2dWorld;
