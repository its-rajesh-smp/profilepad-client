import SwiperCarousel from "@/common/components/Carousels/SwiperCarousel";
import { IDashboardCard } from "../../types/dashboard.type";
import MoveBtn from "../UI/Toolbars/MoveBtn";

function ImageCarouselCard({}: IDashboardCard) {
  return (
    <div className="h-full w-full overflow-hidden">
      <MoveBtn />
      <SwiperCarousel variant="effect-cards" />
    </div>
  );
}

export default ImageCarouselCard;
