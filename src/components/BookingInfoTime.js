import React from "react";
import { useStateValue } from "../state/stateProvider";
import {
  stringHourToHourAndMinutes,
  stringHourToMinutes,
  timeConvert,
} from "../utils/TimeFunctions";

export default function BookingInfoTime() {
  const [{ booking }, dispatch] = useStateValue();
  const { day, month, year, hourAndMinutes, durationInMinutes } = booking.time;
  const endingTime = timeConvert(
    stringHourToMinutes(booking?.time?.hourAndMinutes) + durationInMinutes
  );
  const { hours, minutes } = stringHourToHourAndMinutes(
    booking?.time?.hourAndMinutes
  );

  // console.log(booking.time);
  return (
    <div className="py-lg">
      <div className="text-lg font-semibold ">
        {day} {month} {year} at {hourAndMinutes}
      </div>

      <div className="text-secondarytextColor text-base font-normal">
        {hours && hours + " hours and "} {minutes}min duration, ends at{" "}
        {endingTime}
      </div>
    </div>
  );
}
