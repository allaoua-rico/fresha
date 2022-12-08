import React from "react";
import { useStateValue } from "../state/stateProvider";
import { resolveSelectedServicesArray } from "../utils/functions";
import HorGrayLine from "./HorGrayLine";

export default function BookingInfoServices() {
  const [{ booking }, dispatch] = useStateValue();
  const selectedServices = resolveSelectedServicesArray(booking.services);
  return (
    <>
      {React.Children.toArray(
        selectedServices.map(({ title, title2, duration, option }, index) => {
          return (
            <>
              <div className="flex justify-between py-sm px-10 lg:px-8">
                <div className="flex flex-col justify-center">
                  <div className="text-base font-light">
                    {title} {title2}
                  </div>
                  <div className="text-base font-normal text-secondarytextColor">
                    {duration} {option?.title}
                  </div>
                </div>
                <div className="text-right">SAR {option?.price}</div>
              </div>
              {index != selectedServices.length - 1 && <HorGrayLine />}
            </>
          );
        })
      )}
    </>
  );
}
