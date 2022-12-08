import React from "react";
import { resolveSelectedServicesArray } from "../utils/functions";

export default function AppointmentListCardServices({ services }) {
  const selectedServices = resolveSelectedServicesArray(services);
  let p = "";
  selectedServices.map(({ title, title2 }) => {
    if (selectedServices.length !== 1) {
      p += `${title} ${title2} ` + ", ";
    } else {
      p = `${title} ${title2} `;
    }
  });
  return (
    <div className="line-clamp-1 text-base text-black font-light text-left ">
      {p}
    </div>
  );
}
