import React, { useEffect, forwardRef } from "react";
import { useState } from "react";
import MainWrapper from "../assets/Wrappers/MainWrapper";
import BookingHeaderNav from "./BookingHeaderNav";

const BookingHeader = forwardRef(({ stepLabel, step }, ref) => {
  const maxtop = 25;

  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const [top, setTop] = useState(maxtop);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition === 0) {
      setTop(maxtop);
      setOpacity(1);
      return setScale(1);
    }
    // if (scrollPosition >= 100) {
    //   setTop(0);
    //   setOpacity(0);
    //   return setScale(0.7);
    // }
    if (1 < scrollPosition <= 100) {
      if (scrollPosition >= 100) return;
      setTop(maxtop - (maxtop / 100) * scrollPosition);
      setOpacity(1 - 0.01 * scrollPosition);
      return setScale(1 - 0.004 * scrollPosition);
    }
  }, [scrollPosition]);

  return (
    <header
      ref={ref}
      className="w-full lg:min-h-[80px] flex justify-center items-start fixed-top z-[1000] shadow-lg bg-mainPrimary text-mainSecondary"
    >
      <MainWrapper maxWidth="max-w-screen-lg">
        <div
          style={{ paddingBottom: top, paddingTop: top }}
          className="w-full relative max-w-pMaxW px-md md:px-lg lg:px-sm"
        >
          <BookingHeaderNav />
          <div
            style={{
              paddingTop: top,
              // transform: `translateX(-${scrollPosition}px)`,
            }}
            className="absolute -z-10 lg:ml-xxl top-0 left-4 ml-12 "
          >
            <div
              style={{
                opacity,
                transform: `translateY(-${scrollPosition}px)`,
              }}
              className="text-secondarytextColor fixed top-4"
            >
              Step {step} of 4
            </div>
            <div
              style={{ transform: `scale(${scale})` }}
              className="text-4xl origin-top-left font-semibold h-14 flex justify-between items-center mt-3"
            >
              {/* Select  */}
              {stepLabel}
            </div>
          </div>
        </div>
      </MainWrapper>
    </header>
  );
});
export default BookingHeader;
