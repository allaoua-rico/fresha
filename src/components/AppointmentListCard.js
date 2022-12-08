import React from "react";
import AppointmentListCardLgScreen from "./AppointmentListCardLgScreen";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "./ui/Theme";
import AppointmentListCardSmScreen from "./AppointmentListCardSmScreen";

export default function AppointmentListCard({ appt }) {
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {lg ? (
        <AppointmentListCardLgScreen appt={appt} />
      ) : (
        <AppointmentListCardSmScreen appt={appt} />
      )}
    </>
  );
}
