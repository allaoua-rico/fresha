import React from "react";
import AppointmentCancelTime from "./AppointmentCancelTime";
import StorePicture from "./StorePicture";

export default function AppointmentCancelCard({ appt, className }) {
  const { time } = appt;
  const { store } = appt;
  return (
    <div className={className}>
      <div className="flex justify-between items-center p-md border border-gray-300 rounded-lg">
        <div>
          <AppointmentCancelTime time={time} />
          <div>{store.name}</div>
        </div>
        <StorePicture
          storeLink={store.link}
          storeImage={store.images[0]}
          wh={44}
        />
      </div>
    </div>
  );
}
