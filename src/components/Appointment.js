import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { fetchAppointmentById } from "../utils/functions";
import AppointmentHeader from "./AppointmentHeader";
import AppointmentTopInfos from "./AppointmentTopInfos";
import { useResizeDetector } from "react-resize-detector";
import AppointmentBellowInfos from "./AppointmentBellowInfos";
import { useMediaQuery } from "@mui/material";
import theme from "./ui/Theme";

export default function Appointment({ apptId, className }) {
  const appt = fetchAppointmentById(apptId);
  const [bookingHeaderHeight, setBookingHeaderHeight] = useState(0);
  const { ref: bookingHeaderRef } = useResizeDetector();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    setBookingHeaderHeight(bookingHeaderRef?.current?.clientHeight);
  });

  return (
    <div className={className}>
      {appt ? (
        <div className="bg-mainPrimary w-full lg:rounded-lg lg:overflow-hidden lg:shadow-lg">
          <AppointmentHeader ref={bookingHeaderRef} apptId={apptId} />
          <main
            style={{
              paddingTop: lg ? 0 : bookingHeaderHeight,
            }}
            className="w-full"
          >
            <AppointmentTopInfos appt={appt} />
            <div className="lg:relative bg-white flex flex-col">
              <div className="hidden lg:flex w-full bg-mainPrimary absolute top-0 min-h-min h-20"></div>
              <div className="lg:pb-xxl lg:px-xxl z-10 ">
                <AppointmentBellowInfos appt={appt} />
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div>No appointment found</div>
      )}
    </div>
  );
}
