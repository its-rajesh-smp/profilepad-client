import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import GridItemContext from "../../contexts/grid-item.context";
import { setIsFirstGridLoad } from "../../reducers/dashboard.reducer";
import LinkPrimary from "../cards/link/LinkPrimary";
import ProfileHeadlinePrimary from "../cards/profile-headline/ProfileHeadlinePrimary";
import TitlePrimary from "../cards/title/TitlePrimary";
import GridItemActionBar from "./GridItemActionBar";

interface IGridItemProps {
  index: number;
  isLast: boolean;
}

function GridItem({ index, isLast }: IGridItemProps) {
  const isFirstGridLoad = useAppSelector(
    (state) => state.dashboardReducer.dashboardSlice.isFirstGridLoad,
  );
  const { item } = useContext(GridItemContext);
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const animation = isFirstGridLoad
    ? {
        initial: { y: "50%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 50,
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
          stiffness: 70,
        },
      };

  return (
    item && (
      <motion.div
        {...animation}
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        className="relative h-full w-full cursor-move"
        onAnimationComplete={() => {
          isLast && dispatch(setIsFirstGridLoad(false));
        }}
      >
        {isHovered && <GridItemActionBar />}

        {item.variant === "title" && <TitlePrimary />}
        {item.variant === "link" && <LinkPrimary />}
        {item.variant === "profileHeadline" && <ProfileHeadlinePrimary />}
      </motion.div>
    )
  );
}

export default GridItem;
