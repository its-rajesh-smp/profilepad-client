import { motion } from "framer-motion";
import { useContext } from "react";
import GridItemContext from "../../context/GridItemContext";
import EmptyCard from "../cards/EmptyCard";
import HtmlCard from "../cards/HtmlCard";
import IconCard from "../cards/IconCard";
import ImageCard from "../cards/ImageCard";
import ImageCarouselCard from "../cards/ImageCarouselCard";
import InitialCard from "../cards/InitialCard";
import LinkCard from "../cards/LinkCard";
import SectionCard from "../cards/SectionCard";
import TextCard from "../cards/TextCard";

const DashboardCard = () => {
  const props = useContext(GridItemContext).item;
  const isEmpty = props.type === "empty" || props.type === "section";
  const isInitial = props.variant === "initial";
  const className = ` h-full w-full cursor-pointer overflow-y-auto rounded-2xl hover:bg-zinc-50  bg-white ${!isEmpty && "shadow-sm border"}`;

  if (isInitial)
    return (
      <div
        className={`${className} border-2 border-dashed border-zinc-200 shadow-sm`}
      >
        <InitialCard {...props} />
      </div>
    );

  const renderCard = () => {
    switch (props.type) {
      case "image":
        return <ImageCard {...props} />;
      case "link":
        return <LinkCard {...props} />;
      case "section":
        return <SectionCard {...props} />;
      case "empty":
        return <EmptyCard {...props} />;
      case "html":
        return <HtmlCard {...props} />;
      case "text":
        return <TextCard {...props} />;
      case "carousel":
        return <ImageCarouselCard {...props} />;
      case "icon":
        return <IconCard {...props} />;
    }
  };

  return <motion.div className={className}>{renderCard()}</motion.div>;
};

export default DashboardCard;
