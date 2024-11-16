// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { RANDOM_IMAGE_SRC } from "@/common/constants/url.const";
import { EffectCards, Navigation } from "swiper/modules";
import NextButton from "../UI/NextButton";
import PrevButton from "../UI/PrevButton";

export default function EffectCardCarousel() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <NextButton />
      <PrevButton />
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        navigation={{
          enabled: true,
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
          disabledClass: "opacity-50",
        }}
        speed={500}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            className="h-full w-full object-cover object-center"
            src={RANDOM_IMAGE_SRC}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full object-cover object-center"
            src={RANDOM_IMAGE_SRC}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
