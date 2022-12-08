import React from "react";
import AppointmentActions from "./AppointmentActions";
import AppointmentsStoreInfos from "./AppointmentsStoreInfos";

export default function AppointmentTopInfos({ appt }) {
  return (
    <div className="py-xl md:py-xxl px-5 md:px-xxl xl:flex">
      <AppointmentsStoreInfos className="pb-8" appt={appt} />
      <AppointmentActions appt={appt} />
    </div>
  );
}
