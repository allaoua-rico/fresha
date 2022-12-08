import React, { forwardRef, useEffect, useState } from "react";
import MainWrapper from "../assets/Wrappers/MainWrapper";
import { fetchAppointmentById } from "../utils/functions";
import AppointmentTime from "./AppointmentTime";
import AppointmentConfirm from "./AppointmentConfirm";
import theme from "./ui/Theme";
import { useMediaQuery } from "@mui/material";

const AppointmentHeader = forwardRef(({ apptId }, ref) => {
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const [scrollPosition, setScrollPosition] = useState(0);
  const [confirmTranslate, setConfirmTranslate] = useState(0);
  const [padding, setPadding] = useState(20);
  const [translate, setTranslate] = useState(0);
  const [scale, setScale] = useState(1);
  const appt = fetchAppointmentById(apptId);

  const maxPadding = 15;
  const handleScroll = () => setScrollPosition(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!lg) {
      if (scrollPosition === 0) {
        setTranslate(scrollPosition);
        setConfirmTranslate(scrollPosition);
        setPadding(maxPadding);
        return setScale(1);
      }
      if (1 < scrollPosition <= 100) {
        if (scrollPosition >= 100) return;
        setPadding(maxPadding - (maxPadding / 100) * scrollPosition);
        setTranslate(scrollPosition / 10);
        setConfirmTranslate(scrollPosition);
        return setScale(1 - 0.003 * scrollPosition);
      }
    }
  }, [scrollPosition]);

  return (
    <header
      ref={ref}
      className="z-20 w-full flex justify-center items-start fixed lg:relative top-0 bg-mainPrimary text-mainSecondary"
    >
      <MainWrapper maxWidth="max-w-screen-lg">
        <div
          style={{ paddingBottom: padding }}
          className="w-full max-w-pMaxW px-md md:px-xxl"
        >
          <div style={{ paddingBottom: padding }} className="flex flex-col ">
            <div
              style={{
                transform: `translateY(-${translate}px) scale(${scale})`,
              }}
              className="origin-top-left pt-5 z-10 bg-mainPrimary"
            >
              <AppointmentTime
                style={{ paddingBottom: padding }}
                time={appt.time}
              />
            </div>
            <div
              style={{
                transform: `translateY(-${confirmTranslate}px)`,
              }}
              className="origin-top-left z-0 absolute bottom-0"
            >
              <AppointmentConfirm appt={appt} />
            </div>
          </div>
        </div>
      </MainWrapper>
    </header>
  );
});
export default AppointmentHeader;
