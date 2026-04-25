// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { RANDOM_IMAGE_SRC } from "@/common/constants/url.const";
import { getRandomNumber } from "@/common/utils/others.util";
import { useRef } from "react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import LazyImage from "../../LazyImage/LazyImage";
import NextButton from "../UI/NextButton";
import PrevButton from "../UI/PrevButton";

export default function EffectCardCarousel({ images }: any) {
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  return (
    <div className="relative h-full w-full overflow-hidden">
      <NextButton btnRef={nextBtnRef} />
      <PrevButton btnRef={prevBtnRef} />
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Navigation, Autoplay]}
        navigation={{
          enabled: true,
          nextEl: nextBtnRef?.current,
          prevEl: prevBtnRef?.current,
          disabledClass: "opacity-50",
        }}
        autoplay={{ delay: getRandomNumber(2000, 5000) }}
        speed={1000}
        className="h-full w-full"
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
