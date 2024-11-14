import { motion } from "framer-motion";
import { authPageFloatingItems } from "../constants/floating-items.const";
import FloatingElement from "./UI/FloatingElement";

function FloatingElementsContainer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden h-full w-1/2 grid-cols-3 grid-rows-3 items-center lg:grid"
    >
      {authPageFloatingItems.map((imageUrl, index) => (
        <FloatingElement key={index} src={imageUrl} />
      ))}
    </motion.div>
  );
}

export default FloatingElementsContainer;
