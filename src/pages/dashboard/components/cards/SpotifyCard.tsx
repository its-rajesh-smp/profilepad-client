import SwiperCarousel from "@/common/components/Carousels/SwiperCarousel";
import { IDashboardCard } from "../../types/dashboard.type";

function SpotifyCard({}: IDashboardCard) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden p-20">
      <SwiperCarousel variant="effect-cards" />
    </div>
  );
}

export default SpotifyCard;
