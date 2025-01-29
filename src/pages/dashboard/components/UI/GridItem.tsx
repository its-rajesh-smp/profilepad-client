import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { motion } from "framer-motion";
import useItemDetails from "../../hooks/useItemDetails";
import { setIsFirstGridLoad } from "../../reducers/dashboard.reducer";
import LinkPrimary from "../cards/link/LinkPrimary";
import TitlePrimary from "../cards/title/TitlePrimary";

interface IGridItemProps {
  index: number;
  i: string;
  isLast: boolean;
}

function GridItem({ index, i, isLast }: IGridItemProps) {
  const item = useItemDetails(i);
  const isFirstGridLoad = useAppSelector(
    (state) => state.dashboardReducer.dashboardSlice.isFirstGridLoad,
  );
  const dispatch = useAppDispatch();

  const animation = isFirstGridLoad
    ? {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 250,
          delay: (1 + index) * 0.1,
        },
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
      className="h-full w-full cursor-move"
      onAnimationComplete={() => {
        isLast && dispatch(setIsFirstGridLoad(false));
      }}
    >
      {item?.variant === "title" && <TitlePrimary />}
      {item?.variant === "link" && <LinkPrimary />}
    </motion.div>
  );
}

export default GridItem;
