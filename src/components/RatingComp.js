import React, { useState } from "react";
import { Rating } from "@mui/material";
import { MdStar } from "react-icons/md";

export default function () {
  const [rating, setRating] = useState(4.7);
  const [feedback, setFeedback] = useState("Great");
  const [totalRatings, setTotalRatings] = useState(259);
  return (
    <div className="flex items-center">
      <div className="hidden md:flex">
        <Rating name="rating" value={rating} readOnly />
      </div>
      <div className="md:hidden flex items-center">
        <MdStar className="fill-[#faaf00] w-6 h-6" />
        {/* <TiStarFullOutline className="fill-[#faaf00]"/> */}
      </div>
      <div className="flex flex-row lg:flex-col xl:flex-row ml-2">
        <div className="font-semibold md:text-xl ml-2">
          {rating} {feedback}
        </div>{" "}
        <div className="md:hidden ml-2  text-secondarytextColor">
          ({totalRatings})
        </div>
        <div className="hidden md:flex  md:ml-2  md:text-lg text-secondarytextColor">
          {totalRatings} ratings
        </div>
      </div>
    </div>
  );
}
