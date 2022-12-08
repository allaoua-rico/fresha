import React from "react";
import AppointmentCancelMain from "../components/AppointmentCancelMain";
import CancelAppointmentDialog from "./CancelAppointmentDialog";
import CancelAppointmentDialogFullScreen from "./CancelAppointmentDialogFullScreen";

export default function CancelAppointment() {
  return (
    <>
      <div className="hidden md:flex w-full min-h-screen justify-center items-center bg-secondaryBg ">
        <CancelAppointmentDialogFullScreen/>
        {/* <AppointmentCancelMain /> */}
      </div>
      <div className="flex md:hidden relative h-screen">
        <CancelAppointmentDialog />
      </div>
    </>
  );
}
