import React from "react";
import { Badge } from "@mui/material";
import AppointmentCardTime from "./AppointmentCardTime";
import AppointmentCardConfirmBadge from "./AppointmentCardConfirmBadge";
import AppointmentListCardServices from "./AppointmentListCardServices";
import StorePicture from "./StorePicture";
import { useNavigate, useParams } from "react-router-dom";
import { splitAppointments } from "../utils/TimeFunctions";
import AppointmentConfirm from "./AppointmentConfirm";
import {
  getTotalFromNonResolvedServices,
  resolveSelectedServicesArray,
  resolveService,
} from "../utils/functions";
import HorGrayLine from "./HorGrayLine";
import AppointmentListCardSmScreenConfirmed from "./AppointmentListCardSmScreenConfirmed";
import AppointmentListCardSmScreenPast from "./AppointmentListCardSmScreenPast";

export default function AppointmentListCardSmScreen({ appt }) {
  // check if appointment is upcomming or past
  const { upcomingAppts, pastAppts } = splitAppointments([appt]);
  return (
    <>
      {appt &&
        (!!upcomingAppts[0] ? (
          <AppointmentListCardSmScreenConfirmed
            className={"w-full pb-md pt-lg bg-white shadow-md rounded-lg mb-xxl"}
            appt={appt}
          />
        ) : (
          <AppointmentListCardSmScreenPast appt={appt} />
        ))}
    </>
  );
}
