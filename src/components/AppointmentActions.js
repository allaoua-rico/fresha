import React, { useEffect, useState } from "react";
import { useStateValue } from "../state/stateProvider";
import { dipatchAppt } from "../utils/functions";
import {
  getMonthFromString,
  isAppointmentPassed,
} from "../utils/TimeFunctions";
import CalendarButton from "./CalendarButton";
import CancelButton from "./CancelButton";
import RebookButton from "./RebookButton";
import RescheduleButton from "./RescheduleButton";

export default function AppointmentActions({ appt, className }) {
  const [{ appointment }, dispatch] = useStateValue();
  const [upcoming, setUpcoming] = useState(false);
  const { isConfirmed, time } = appt;
  const { hourAndMinutes, day, month, year, durationInMinutes } = time;
  function isAppointmentUpcomingOrPast() {}
  useEffect(() => {
    setUpcoming(
      !isAppointmentPassed(
        `${year}-${getMonthFromString(month)}-${day} ${hourAndMinutes}`
      ) && isConfirmed
    );
  });
  function handleClick() {
    dipatchAppt(dispatch, appt);
  }
  return (
    <div className={className}>
      {upcoming ? (
        <div className="flex justify-between">
          <CalendarButton onClick={handleClick} className="xl:ml-xl" />
          <RescheduleButton onClick={handleClick} className="xl:ml-xl" />
          <CancelButton
            onClick={handleClick}
            appt={appt}
            className="xl:ml-xl"
          />
        </div>
      ) : (
        <div>
          <RebookButton onClick={handleClick} className="xl:ml-xl" />
        </div>
      )}
    </div>
  );
}
