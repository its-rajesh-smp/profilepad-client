import { motion } from "framer-motion";

interface IGridItemProps {
  index: number;
  i: string;
}

function GridItem({ index, i }: IGridItemProps) {
  const isFirstTime = false;

  const animation = isFirstTime
    ? {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        duration: 0.5,
        ease: "easeInOut",
        delay: (1 + index) * 0.1,
      }
    : {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 250,
        },
      };

  return (
    <motion.div
      {...animation}
      whileHover={{ scale: 1.05 }}
      className="h-full w-full cursor-move bg-zinc-500"
    >
      GridItem {i}
    </motion.div>
  );
}

export default GridItem;
