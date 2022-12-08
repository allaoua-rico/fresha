import { Rating } from "@mui/material";
import React from "react";
import ReviewFilter from "./ReviewFilter";

export default function ReviewLeftCard({
  reviews,
  rating,
  feedback,
  totalRatings,
}) {
  return (
    <div className="shadow-md rounded-xl p-8 w-full h-fit">
      <Rating name="rating" value={rating} readOnly size="large" />
      <div className="flex pl-1 pb-5">
        <div className="font-semibold text-xl">
          {rating} {feedback}
        </div>{" "}
        <div className="flex ml-2 text-xl text-secondarytextColor">
          {totalRatings} ratings
        </div>
      </div>
      <ReviewFilter totalRatings={totalRatings}/>
    </div>
  );
}
