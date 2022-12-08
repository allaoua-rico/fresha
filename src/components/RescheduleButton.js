import React from "react";
import { RiCalendar2Line } from "react-icons/ri";
import IsConfirmedButtonWrapper from "../assets/Wrappers/IsConfirmedGrayButtonWrapper";

export default function RescheduleButton({className}) {
  return (
    <div className={className}>
          <IsConfirmedButtonWrapper>
      <RiCalendar2Line className="w-7 h-7" />
      <div>Reschedule</div>
    </IsConfirmedButtonWrapper>
    </div>

  );
}
