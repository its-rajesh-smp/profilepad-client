// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { RANDOM_IMAGE_SRC } from "@/common/constants/url.const";
import { EffectFlip, Navigation } from "swiper/modules";
import NextButton from "../UI/NextButton";
import PrevButton from "../UI/PrevButton";

export default function EffectFilpCarousel() {
  return (
    <div className="relative h-full w-full">
      <NextButton />
      <PrevButton />
      <Swiper
        effect={"flip"}
        grabCursor={true}
        navigation={{
          enabled: true,
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
          disabledClass: "opacity-50",
        }}
        modules={[EffectFlip, Navigation]}
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
