import React, { useEffect, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { TiCancel } from "react-icons/ti";
import { BsEyeSlash } from "react-icons/bs";
import {
  getMonthFromString,
  isAppointmentPassed,
} from "../utils/TimeFunctions";

export default function AppointmentCardConfirmBadge({ appt }) {
  //   const [timePassed, setTimePassed] = useState(false);
  const { isConfirmed, time } = appt;
  const { hourAndMinutes, day, month, year, durationInMinutes } = time;
  const timePassed = isAppointmentPassed(
    `${year}-${getMonthFromString(month)}-${day} ${hourAndMinutes}`
  );
  //   useEffect(() => {
  //     setTimePassed(
  //       isAppointmentPassed(
  //         `${year}-${getMonthFromString(month)}-${day} ${hourAndMinutes}`
  //       )
  //     );
  //   });
  return (
    <div>
      {timePassed ? (
        <div className="flex items-center bg-white rounded-full p-[3px]">
          <BsEyeSlash className=" w-4 h-4  fill-red-500" />
        </div>
      ) : (
        <>
          {isConfirmed ? (
            <div className="flex items-center bg-white rounded-full bg- w-fit p-[3px]">
              <BsCheck2Circle className=" w-4 h-4 stroke-1 stroke-blue-500" />
            </div>
          ) : (
            <div className="flex items-center bg-white rounded-full bg-w-fit ">
              <TiCancel className=" w-6 h-6  fill-red-500 " />
            </div>
          )}
        </>
      )}
    </div>
  );
}
