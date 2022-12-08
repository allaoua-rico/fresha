import React from "react";
import { isAppointmentTodayOrTommorow } from "../utils/TimeFunctions";

export default function AppointmentTime({ time, style }) {
  const { hourAndMinutes, day, month, year, durationInMinutes } = time;
  const isAptTodayOrTommorow = isAppointmentTodayOrTommorow(
    `${month}/${day}/${year}`
  );
  return (
    <div className="text-4xl font-bold py-3" style={style}>
      {isAptTodayOrTommorow && isAptTodayOrTommorow + ", "}
      {`${day} ${month} ${year} at ${hourAndMinutes}`}
    </div>
  );
}
