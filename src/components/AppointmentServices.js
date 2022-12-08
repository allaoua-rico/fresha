import React from "react";
// import HorGrayLine from "./HorGrayLine";

export default function AppointmentServices({selectedServices}) {
    // console.log(selectedServices)
  return (
    <>
      {React.Children.toArray(
        selectedServices.map(({ title, title2, duration, option }, index) => {
          return (
            <>
              <div className="flex justify-between py-sm px-0 ">
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
              {/* {index != selectedServices.length - 1 && <HorGrayLine />} */}
            </>
          );
        })
      )}
    </>
  );
}
