import React from "react";
import { FiCheck } from "react-icons/fi";
import HorGrayLine from "./HorGrayLine";

export default function ServicesOption({ service, opt, index, selected }) {
  return (
    <>
      <div className="flex justify-between text-black cursor-pointer group">
        <div className="flex">
          <div
            className={
              `min-w-[40px] w-10 h-10 flex justify-center items-center
              border border-gray-300  duration-100 transition-all
              rounded-full group-hover:border-blue-500 ` +
              (selected ? `bg-blue-500` : `bg-white`)
            }
          >
            <FiCheck className="w-5/6 h-5/6 stroke-white stroke-[1px] " />
          </div>
          <div className="ml-4">
            <div className="text-lg ">{opt.title}</div>
            <div className="text-secondarytextColor">{opt.duration}</div>
          </div>
        </div>
        <div>SAR {opt.price}</div>
      </div>
      {index < service?.options.length - 1 && (
        <div className="-my-2 ">
          <HorGrayLine />
        </div>
      )}
    </>
  );
}

