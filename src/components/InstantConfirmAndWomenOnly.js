import React from "react";
import { BsLightning } from "react-icons/bs";
import { RiWomenLine } from "react-icons/ri";

export default function InstantConfirmAndWomenOnly() {
  return (
    <div>
      {" "}
      <div className=" py-2">
        <div className="pl-4 flex items-center">
          <BsLightning className="w-6 h-6 mr-3 ml-2" />
          <p>Instant confirmation</p>
        </div>
      </div>
      <div className=" py-2">
        <div className="pl-4 flex items-center">
          <RiWomenLine className="w-6 h-6 mr-3 ml-2" />
          <p>Women only</p>
        </div>
      </div>
    </div>
  );
}
