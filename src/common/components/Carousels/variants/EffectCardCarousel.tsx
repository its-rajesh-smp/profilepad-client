// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCards } from "swiper/modules";

export default function EffectCardCarousel() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="h-[90%] w-[90%]"
      >
        <SwiperSlide>
          <img className="h-full w-full" src="https://picsum.photos/200" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src="https://picsum.photos/200" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src="https://picsum.photos/200" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src="https://picsum.photos/200" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src="https://picsum.photos/200" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
