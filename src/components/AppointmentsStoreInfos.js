import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import StorePicture from "./StorePicture";

export default function AppointmentsStoreInfos({ appt, className }) {
  const {
    name: storeName,
    location: storeLocation,
    link: storeLink,
    images: storeImages,
  } = appt.store;
  return (
    <div className={className}>
      <div className="w-full flex items-center xl:items-start justify-between xl:flex-row-reverse">
        <div className="text-white ">
          <div className="font-semibold">{storeName}</div>
          <Link to={storeLink} className="flex items-center">
            <IoLocationOutline className="w-9 h-9" />
            <div className="underline">{storeLocation}</div>
          </Link>
          <div className="text-thirdtextColor pt-2">
            Booking ref: {appt.bookingRef}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden min-w-min ml-3 xl:mr-md">
          <StorePicture
            wh={64}
            storeLink={storeLink}
            storeImage={storeImages[0]}
          />
        </div>
      </div>
    </div>
  );
}
