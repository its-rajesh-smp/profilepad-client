import { motion } from "framer-motion";

interface IGridItemProps {
  index: number;
  i: string;
}

function GridItem({ index, i }: IGridItemProps) {
  const transition = {
    duration: 0.5,
    ease: "easeInOut",
    delay: (1 + index) * 0.1,
  };

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
      className="h-full w-full bg-zinc-500"
    >
      GridItem {i}
    </motion.div>
  );
}

export default GridItem;
