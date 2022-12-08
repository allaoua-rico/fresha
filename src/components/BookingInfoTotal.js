import React, { useEffect, useState } from "react";

export default function BookingInfoTotal({ selectedServices,className }) {
  const total = selectedServices.reduce((accumulator, service) => {
    return accumulator + service?.option?.price;
  }, 0);
  return (
    <div  className={className}>
      <div className="flex justify-between text-secondarytextColor">
        <div>Taxes</div>
        <div>SAR 100</div>
      </div>
      <div className="flex justify-between font-semibold text-lg">
        <div>Total</div>
        <div>SAR {total}</div>
      </div>
    </div>
  );
}
