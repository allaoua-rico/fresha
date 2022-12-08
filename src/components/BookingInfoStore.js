import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";

export default function BookingInfoStore() {
  const [{ booking }, dispatch] = useStateValue();
  const { name, location, images, link } = booking.store;

  return (
    <Link to={link} className="flex justify-between py-lg">
      <div className="flex flex-col justify-center pr-10">
        <div className="text-lg font-medium">{name}</div>
        <div className="text-base font-light text-secondarytextColor">
          {location}
        </div>
      </div>
      <div className="w-16 h-16 overflow-hidden flex justify-center border-2 rounded-xl">
        <img className="w-auto h-full max-w-max" src={images} alt="store-img" />
      </div>
    </Link>
  );
}
