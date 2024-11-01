import { IDashboardCard } from "../../types/dashboard.type";
import ImageCard from "../cards/ImageCard";
import LinkCard from "../cards/LinkCard";
import TextCard from "../cards/TextCard";

const DashboardCard = ({ type, link, id }: IDashboardCard) => {
  const getCard = (type: IDashboardCard["type"]) => {
    switch (type) {
      case "image":
        return <ImageCard />;
      case "link":
        return <LinkCard link={link ?? ""} />;
      default:
        return <TextCard id={id} />;
    }
  };

  return (
    <div className="h-full w-full cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-md">
      {getCard(type)}
    </div>
  );
};

export default DashboardCard;
