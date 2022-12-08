import React, { useEffect, useState } from "react";
import { BsHouseDoor } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

export default function AddressEditName({ className, name,getName }) {
  const [selected, setSelected] = useState(name);
  useEffect(() => {
    getName(selected)
  }, [selected])
  
  return (
    <div className={className}>
      <div className="grid grid-cols-3 gap-x-md w-fit">
        <div
          onClick={() => setSelected("Home")}
          className={
            " p-7 rounded-lg border cursor-pointer shadow-md hover:shadow-lg flex flex-col items-center font-medium " +
            (selected == "Home" && "border-blue-500 border-[2px] bg-blue-100")
          }
        >
          <BsHouseDoor className="w-7 h-7 stroke-0" />
          Home
        </div>
        <div
          onClick={() => setSelected("Work")}
          className={
            " p-7 rounded-lg border  cursor-pointer shadow-md hover:shadow-lg flex flex-col items-center font-medium " +
            (selected == "Work" && "border-blue-500 border-[2px] bg-blue-100")
          }
        >
          <MdWorkOutline className="w-7 h-7 stroke-0" />
          Work
        </div>
        <div
          onClick={() => setSelected("Other")}
          className={
            " p-7 rounded-lg border  cursor-pointer shadow-md hover:shadow-lg flex flex-col items-center font-medium " +
            (selected !== "Work" &&
              selected !== "Home" &&
              "border-blue-500 border-[2px] bg-blue-100")
          }
        >
          <HiOutlineDotsCircleHorizontal className="w-7 h-7 stroke-0" />
          Other
        </div>
      </div>
    </div>
  );
}
