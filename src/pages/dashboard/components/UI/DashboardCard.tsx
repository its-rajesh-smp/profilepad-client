import { motion } from "framer-motion";
import { IDashboardCard } from "../../types/dashboard.type";
import ImageCard from "../cards/ImageCard";
import LinkCard from "../cards/LinkCard";
import TextCard from "../cards/TextCard";

const DashboardCard = (props: IDashboardCard) => {
  const getCard = (type: IDashboardCard["type"]) => {
    switch (props.type) {
      case "image":
        return <ImageCard {...props} />;
      case "link":
        return <LinkCard {...props} />;
      default:
        return <TextCard {...props} />;
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: Math.random() * 0.5 }}
      className="h-full w-full cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-md"
    >
      {getCard(props.type)}
    </motion.div>
  );
};

export default DashboardCard;
