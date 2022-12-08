import React from "react";
import { getDayName, getMonthFromString } from "../utils/TimeFunctions";

export default function AppointmentCancelTime({ time }) {
  const { hourAndMinutes, day, month, year, durationInMinutes } = time;
  const dayName = getDayName(year, getMonthFromString(month), day);
  return (
    <div className="text-lg font-semibold">
      {`${dayName}, ${day} ${month} ${year} at ${hourAndMinutes}`}
    </div>
  );
}
