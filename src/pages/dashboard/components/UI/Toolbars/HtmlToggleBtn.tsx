import { motion } from "framer-motion";
import { FaCode, FaEye } from "react-icons/fa";

function HtmlToggleBtn({
  setPreview,
  preview,
}: {
  setPreview: React.Dispatch<React.SetStateAction<boolean>>;
  preview: boolean;
}) {
  return (
    <motion.button
      onClick={() => setPreview(!preview)}
      initial={{ opacity: 0 }}
      whileTap={{ scale: 0.7 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="no-drag absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full !bg-white shadow-md"
    >
      {preview ? <FaCode className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
    </motion.button>
  );
}

export default HtmlToggleBtn;
