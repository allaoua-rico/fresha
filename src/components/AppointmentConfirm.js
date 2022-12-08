import React, { useEffect, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { TiCancel } from "react-icons/ti";
import { BsEyeSlash } from "react-icons/bs";
import {
  getMonthFromString,
  isAppointmentPassed,
} from "../utils/TimeFunctions";

export default function AppointmentConfirm({ appt, style }) {
  const [timePassed, setTimePassed] = useState(false);
  const { isConfirmed, time } = appt;
  const { hourAndMinutes, day, month, year, durationInMinutes } = time;

  useEffect(() => {
    setTimePassed(
      isAppointmentPassed(
        `${year}-${getMonthFromString(month)}-${day} ${hourAndMinutes}`
      )
    );
  });

  return (
    <div className="text-white" style={style}>
      {timePassed ? (
        <div className="flex items-center rounded-full bg-red-500 w-fit px-3 py-1 text-sm font-bold">
          <BsEyeSlash className="mr-1 w-5 h-5 " />
          No-show
        </div>
      ) : (
        <>
          {isConfirmed ? (
            <div className="flex items-center rounded-full bg-blue-500 w-fit px-3 py-1 text-sm font-bold">
              <BsCheck2Circle className="mr-1 w-5 h-5 stroke-1" />
              Confirmed
            </div>
          ) : (
            <div className="flex items-center rounded-full bg-red-500 w-fit px-3 py-1 text-sm font-bold">
              <TiCancel className="mr-1 w-6 h-6 " />
              Cancelled
            </div>
          )}
        </>
      )}
    </div>
  );
}
