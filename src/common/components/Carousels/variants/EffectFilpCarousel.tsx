// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { RANDOM_IMAGE_SRC } from "@/common/constants/url.const";
import { getRandomNumber } from "@/common/utils/others.util";
import { Autoplay, EffectFlip, Navigation } from "swiper/modules";
import LazyImage from "../../LazyImage/LazyImage";
import NextButton from "../UI/NextButton";
import PrevButton from "../UI/PrevButton";

export default function EffectFilpCarousel({ images }: any) {
  return (
    <div className="relative h-full w-full overflow-hidden">
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
        modules={[EffectFlip, Navigation, Autoplay]}
        className="h-full w-full"
        autoplay={{ delay: getRandomNumber(2000, 5000) }}
      >
        {images?.map((image: any, index: number) => (
          <SwiperSlide key={index}>
            <LazyImage
              className="h-full w-full object-cover object-center"
              src={image}
            />
          </SwiperSlide>
        ))}
        {images?.length === 0 && (
          <>
            <SwiperSlide>
              <LazyImage
                className="h-full w-full object-cover object-center"
                src={RANDOM_IMAGE_SRC}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LazyImage
                className="h-full w-full object-cover object-center"
                src={RANDOM_IMAGE_SRC}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LazyImage
                className="h-full w-full object-cover object-center"
                src={RANDOM_IMAGE_SRC}
              />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
}
