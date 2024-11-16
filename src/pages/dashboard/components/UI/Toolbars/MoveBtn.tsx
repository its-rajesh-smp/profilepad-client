import { motion } from "framer-motion";
import { MoveDiagonal } from "lucide-react";

function MoveBtn() {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileTap={{ scale: 0.7 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full !bg-white shadow-md"
    >
      <MoveDiagonal className="h-4 w-4" />
    </motion.button>
  );
}

export default MoveBtn;
