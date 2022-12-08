import React from "react";
import AppointmentListCard from "./AppointmentListCard";
import HorGrayLine from "./HorGrayLine";

export default function AppointmentsList({ array, className }) {
  return (
    <div className={className}>
      {React.Children.toArray(
        array.map((appt, index) => (
          <>
            <AppointmentListCard appt={appt} />
            {index < array.length - 1 && (
              <div className="-my-3 px-md">
                <HorGrayLine />
              </div>
            )}
          </>
        ))
      )}
    </div>
  );
}
