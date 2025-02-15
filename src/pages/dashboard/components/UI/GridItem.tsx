import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import GridItemContext from "../../contexts/grid-item.context";
import {
  setCurrentActiveGridItemId,
  setIsFirstGridLoad,
} from "../../reducers/dashboard.reducer";
import ImagePrimary from "../cards/image/ImagePrimary";
import LinkPrimary from "../cards/link/LinkPrimary";
import ProfileHeadlinePrimary from "../cards/profile-headline/ProfileHeadlinePrimary";
import TextPrimary from "../cards/text/TextPrimary";
import TitlePrimary from "../cards/title/TitlePrimary";
import WorkExperiencePrimary from "../cards/workExperience/WorkExperiencePrimary";
import GridItemActionBar from "./GridItemActionBar";

interface IGridItemProps {
  index: number;
  isLast: boolean;
}

function GridItem({ index, isLast }: IGridItemProps) {
  const { isFirstGridLoad, currentActiveGridItemId } = useAppSelector(
    (state) => state.dashboardSlice,
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
        whileHover={{ scale: 1.01 }}
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        className={`flex h-full w-full cursor-move rounded-2xl bg-white hover:shadow-sm`}
        onAnimationComplete={() => {
          isLast && dispatch(setIsFirstGridLoad(false));
        }}
        onClick={() => dispatch(setCurrentActiveGridItemId(item.id))}
      >
        {isHovered && <GridItemActionBar />}

        {item.variant === "title" && <TitlePrimary />}
        {item.variant === "link" && <LinkPrimary />}
        {item.variant === "profileHeadline" && <ProfileHeadlinePrimary />}
        {item.variant === "image" && <ImagePrimary />}
        {item.variant === "text" && <TextPrimary />}
        {item.variant === "workExperience" && <WorkExperiencePrimary />}
      </motion.div>
    )
  );
}

export default GridItem;
