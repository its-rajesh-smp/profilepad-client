// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";
import EffectCardCarousel from "./variants/EffectCardCarousel";

export type TSwiperCarouselVariants = "effect-cards";
export interface ISwiperCarouselProps {
  variant: TSwiperCarouselVariants;
}

function SwiperCarousel({ variant }: ISwiperCarouselProps) {
  switch (variant) {
    case "effect-cards":
      return <EffectCardCarousel />;
    default:
      return <div>SwiperCarousel</div>;
  }
}

export default SwiperCarousel;
