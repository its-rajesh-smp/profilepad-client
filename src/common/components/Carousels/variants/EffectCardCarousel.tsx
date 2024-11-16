// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCards } from "swiper/modules";
import { RANDOM_IMAGE_SRC } from "@/common/constants/url.const";

export default function EffectCardCarousel() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img className="h-full w-full" src={RANDOM_IMAGE_SRC} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src={RANDOM_IMAGE_SRC} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src={RANDOM_IMAGE_SRC} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src={RANDOM_IMAGE_SRC} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src={RANDOM_IMAGE_SRC} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
