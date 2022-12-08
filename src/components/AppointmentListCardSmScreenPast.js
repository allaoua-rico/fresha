import React from "react";
import { Badge } from "@mui/material";
import AppointmentCardTime from "./AppointmentCardTime";
import AppointmentCardConfirmBadge from "./AppointmentCardConfirmBadge";
import AppointmentListCardServices from "./AppointmentListCardServices";
import StorePicture from "./StorePicture";
import { useNavigate, useParams } from "react-router-dom";
import { splitAppointments } from "../utils/TimeFunctions";
import AppointmentConfirm from "./AppointmentConfirm";
import { FiChevronRight } from "react-icons/fi";
import {
  getTotalFromNonResolvedServices,
  resolveSelectedServicesArray,
  resolveService,
} from "../utils/functions";

export default function AppointmentListCardSmScreenPast({ appt }) {
  let navigate = useNavigate();
  console.log(appt);

  const {
    name: storeName,
    location: storeLocation,
    link: storeLink,
    images: storeImages,
  } = appt ? appt?.store : {};

  const { option } = appt
    ? resolveService(appt.services[0].id, appt.services[0].opt)
    : {};

  const total = appt ? getTotalFromNonResolvedServices(appt) : 0;

  return (
    <>
      <button
        onClick={() => {
          navigate("/appointments/" + appt.id);
        }}
        className="w-full flex items-center p-md bg-white  rounded-xl "
      >
        <Badge
          className="mr-6"
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<AppointmentCardConfirmBadge appt={appt} />}
        >
          <div className="rounded-2xl overflow-hidden">
            <StorePicture
              wh={56}
              storeLink={storeLink}
              storeImage={storeImages[0]}
            />
          </div>
        </Badge>
        <div className="flex flex-col items-start">
          <AppointmentCardTime time={appt.time} />
          <div className="font-semibold">{storeName}</div>
          <AppointmentListCardServices services={appt.services} />
        </div>
        <FiChevronRight className="w-8 h-8"/>
      </button>
    </>
  );
}
