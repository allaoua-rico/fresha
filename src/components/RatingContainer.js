import React from "react";
import { MdStar } from "react-icons/md";

export default function RatingContainer({ rating }) {
  return (
    <div className="flex items-center bg-white rounded-full border-[1px] ml-14 mt-4 px-1 py-[2px]">
      <MdStar className="fill-[#faaf00] w-6 h-6" />
      <div className="text-lg font-semibold">{rating}</div>
    </div>
  );
}
