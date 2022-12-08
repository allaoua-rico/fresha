import React from "react";
import HeadingWithNumber from "../assets/Wrappers/HeadingWithNumber";
import { splitAppointments } from "../utils/TimeFunctions";
import AppointmentsList from "./AppointmentsList";

export default function AppointmentsLists({ className, appts }) {
  const { upcomingAppts, pastAppts } = splitAppointments(appts);
  return (
    <div className={className}>
      <div className="px-md  md:px-xxl lg:px-0">
        <HeadingWithNumber
         className=""
          text="Upcoming appointments"
          number={upcomingAppts.length}
        />
        <AppointmentsList array={upcomingAppts} />
      </div>

      <div className="bg-white lg:bg-transparent md:px-xxl lg:px-0">
        <HeadingWithNumber
          className="pt-8 px-4"
          text="Past appointments"
          number={pastAppts.length}
        />
        <AppointmentsList array={pastAppts} />
      </div>
    </div>
  );
}
