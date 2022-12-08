import React from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import IsConfirmedGrayButtonWrapper from "../assets/Wrappers/IsConfirmedGrayButtonWrapper";
export default function CalendarButton({className}) {
  return (
    <div className={className}>
      <IsConfirmedGrayButtonWrapper>
        <FaRegCalendarPlus className="w-7 h-7" />
        <div>Calendar</div>
      </IsConfirmedGrayButtonWrapper>
    </div>
  );
}
