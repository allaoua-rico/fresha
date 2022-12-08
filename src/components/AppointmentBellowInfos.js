import React from "react";
import { resolveSelectedServicesArray } from "../utils/functions";
import AppointmentServices from "./AppointmentServices";
import BookingInfoTotal from "./BookingInfoTotal";
import HorGrayLine from "./HorGrayLine";

export default function AppointmentBellowInfos({ appt }) {
  const selectedServices = resolveSelectedServicesArray(appt.services);
  return (
    <div className="w-full py-xl md:py-xxl px-5 md:px-xxl bg-secondaryBg lg:rounded-xl">
      <AppointmentServices selectedServices={selectedServices} />
      <HorGrayLine />

      <BookingInfoTotal selectedServices={selectedServices} />
    </div>
  );
}
