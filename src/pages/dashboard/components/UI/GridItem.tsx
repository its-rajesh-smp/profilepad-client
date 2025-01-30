import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import useScreenSize from "@/common/hooks/useScreenSize";
import { motion } from "framer-motion";
import { useState } from "react";
import useItemDetails from "../../hooks/useItemDetails";
import { setIsFirstGridLoad } from "../../reducers/dashboard.reducer";
import { getLayoutSizeType } from "../../utils/grid-item.util";
import LinkPrimary from "../cards/link/LinkPrimary";
import ProfileHeadlinePrimary from "../cards/profile-headline/ProfileHeadlinePrimary";
import TitlePrimary from "../cards/title/TitlePrimary";
import GridItemActionBar from "./GridItemActionBar";

interface IGridItemProps {
  index: number;
  isLast: boolean;
  i: string;
  w: number;
  h: number;
}

function GridItem({ index, i, isLast, h, w }: IGridItemProps) {
  const item = useItemDetails(i);
  const isFirstGridLoad = useAppSelector(
    (state) => state.dashboardReducer.dashboardSlice.isFirstGridLoad,
  );
  const dispatch = useAppDispatch();
  const { size } = useScreenSize();
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

  const sizeType = getLayoutSizeType(size, w, h);

  return (
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
      {isHovered && <GridItemActionBar {...item} />}
      {item?.variant === "title" && (
        <TitlePrimary variant="title" sizeType={sizeType} id={i} />
      )}
      {item?.variant === "link" && (
        <LinkPrimary variant="link" sizeType={sizeType} id={i} />
      )}
      {item?.variant === "profileHeadline" && (
        <ProfileHeadlinePrimary
          variant="profileHeadline"
          sizeType={sizeType}
          id={i}
        />
      )}
    </motion.div>
  );
}

export default GridItem;
