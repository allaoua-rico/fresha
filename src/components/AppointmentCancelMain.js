import React from "react";
import { useParams } from "react-router-dom";
import AppointmentCancelCard from "../components/AppointmentCancelCard";
import CancelActions from "../components/CancelActions";
import CloseButtonAbsolute from "../components/CloseButtonAbsolute";
import { useStateValue } from "../state/stateProvider";

export default function AppointmentCancelMain() {

  const [{ appointment }] = useStateValue();
  const { apptId } = useParams();
  return (
    <div className="bg-white w-full md:max-w-md relative md:rounded-xl">
      <CloseButtonAbsolute
        to={`/appointments/${apptId}`}
        className="top-md right-md group hidden md:flex"
        iconClassName="w-7 h-7 group-hover:stroke-gray-400 transition-all duration-300"
      />
      <h3 className="text-4xl font-semibold pt-xxl px-xxl pb-lg">
        Are you sure you want to cancel?
      </h3>
      <AppointmentCancelCard
        appt={appointment}
        time={appointment.time}
        className="md:px-xxl px-lg pb-lg"
      />
      <p className="md:px-xxl px-lg pb-lg">
        If you want to change the appointment time, you can use the reschedule
        action instead.
      </p>
      <CancelActions
        className="flex pt-lg lg:pt-0 pb-lg md:pb-xxl md:px-xxl px-lg rounded-xl"
        appt={appointment}
      />
    </div>
  );
}
