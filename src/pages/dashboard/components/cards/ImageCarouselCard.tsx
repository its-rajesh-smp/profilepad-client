import SwiperCarousel from "@/common/components/Carousels/SwiperCarousel";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { IDashboardCard } from "../../types/dashboard.type";
import MoveBtn from "../UI/Toolbars/MoveBtn";

function ImageCarouselCard({}: IDashboardCard) {
  const isEditMode = useAppSelector((state) => state.authSlice.editMode);
  return (
    <div className="h-full w-full overflow-hidden">
      {isEditMode && <MoveBtn />}
      <SwiperCarousel variant="effect-cards" />
    </div>
  );
}

export default ImageCarouselCard;
