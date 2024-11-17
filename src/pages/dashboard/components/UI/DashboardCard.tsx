import { motion } from "framer-motion";
import { IDashboardCard } from "../../types/dashboard.type";
import EmptyCard from "../cards/EmptyCard";
import HtmlCard from "../cards/HtmlCard";
import ImageCard from "../cards/ImageCard";
import ImageCarouselCard from "../cards/ImageCarouselCard";
import LinkCard from "../cards/LinkCard";
import SectionCard from "../cards/SectionCard";
import TextCard from "../cards/TextCard";

const DashboardCard = (props: IDashboardCard) => {
  const isEmpty = props.type === "empty" || props.type === "section";
  const className = ` h-full w-full cursor-pointer overflow-y-auto rounded-2xl hover:bg-zinc-50  bg-white ${!isEmpty && "shadow-sm border"}`;

  const getCard = () => {
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
      case "spotify":
        return <ImageCarouselCard {...props} />;
    }
  };

  return <motion.div className={className}>{getCard()}</motion.div>;
};

export default DashboardCard;
