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

export default function AppointmentListCardSmScreenConfirmed({
  appt,
  className,
}) {
  let navigate = useNavigate();

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
    <button
      onClick={() => {
        navigate("/appointments/" + appt.id);
      }}
      className={className}
    >
      <div className="flex justify-between items-center pb-md px-md">
        <div className="flex flex-col items-start pb-md ">
          <AppointmentConfirm appt={appt} />
          <div className="flex flex-col items-start pt-md pb-3">
            <AppointmentCardTime
              className="text-lg font-semibold"
              time={appt.time}
            />
            <div className="font- text-secondarytextColor">{storeName}</div>
          </div>
          <AppointmentListCardServices services={appt.services} />
          <div>{option.duration}</div>
        </div>
        <div className=" rounded-2xl overflow-hidden">
          <StorePicture
            wh={56}
            storeLink={storeLink}
            storeImage={storeImages[0]}
          />
        </div>
      </div>
      <div className="px-md text-left font-semibold border-t pt-2 text-lg">
        Total: SAR {total}
      </div>
    </button>
  );
}
