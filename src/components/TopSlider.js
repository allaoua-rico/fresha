import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TopSlider() {
  const slides = [];
  for (let index = 1; index <= 3; index++) {
    slides.push(
      <SwiperSlide className="bg-black" key={`topSlider${index}`}>
        <img
          className="
          w-auto h-full max-h-max max-w-max 
          md:min-w-full md:h-full"
          src={`images/SliderImage${index}.webp`}
          alt={`topSlider${index}`}
        />
      </SwiperSlide>
    );
  }
  return (
    // Container with these classes fixes swiper width problem
    <div className="w-full md:h-full overflow-hidden">
      <Swiper className="mySwiper h-full aspect-square md:aspect-auto	">
        {slides}
      </Swiper>
    </div>
  );
}
