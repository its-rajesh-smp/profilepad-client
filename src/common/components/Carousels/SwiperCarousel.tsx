// @ts-nocheck
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";

import EffectCardCarousel from "./variants/EffectCardCarousel";
import EffectFilpCarousel from "./variants/EffectFilpCarousel";

export type TSwiperCarouselVariants = "effect-cards" | "effect-flip";
export interface ISwiperCarouselProps {
  variant: TSwiperCarouselVariants;
  images?: string[];
}

function SwiperCarousel(props: ISwiperCarouselProps) {
  const { variant } = props;
  switch (variant) {
    case "effect-cards":
      return <EffectCardCarousel {...props} />;
    case "effect-flip":
      return <EffectFilpCarousel {...props} />;
    default:
      return <div>SwiperCarousel</div>;
  }
}

export default SwiperCarousel;
