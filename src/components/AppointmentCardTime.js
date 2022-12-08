import React from "react";
import { isAppointmentTodayOrTommorow } from "../utils/TimeFunctions";

export default function AppointmentCardTime({ time, className }) {
  const { hourAndMinutes, day, month, year, durationInMinutes } = time;
  const isAptTodayOrTommorow = isAppointmentTodayOrTommorow(
    `${month}/${day}/${year}`
  );
  return (
    <div className={className ? className : "text-thirdtextColor text-md"}>
      {isAptTodayOrTommorow ? isAptTodayOrTommorow : `${day} ${month} ${year}`}
      {` at ${hourAndMinutes}`}
    </div>
  );
}
