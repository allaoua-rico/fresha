import React from "react";
import { Badge } from "@mui/material";
import AppointmentCardTime from "./AppointmentCardTime";
import AppointmentCardConfirmBadge from "./AppointmentCardConfirmBadge";
import AppointmentListCardServices from "./AppointmentListCardServices";
import StorePicture from "./StorePicture";
import { useNavigate, useParams } from "react-router-dom";
export default function AppointmentListCardLgScreen({ appt }) {
  let { apptId } = useParams();
  let navigate = useNavigate();

  const {
    name: storeName,
    location: storeLocation,
    link: storeLink,
    images: storeImages,
  } = appt.store;
  const isSelected = parseInt(apptId) === appt.id;
  return (
    <div>
      <button
        onClick={() => {
          navigate("/appointments/" + appt.id);
        }}
        className={
          "w-full flex items-center p-md hover:bg-white hover:shadow-lg rounded-xl " +
          (isSelected && " bg-white shadow-lg")
        }
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
      </button>
    </div>
  );
}
