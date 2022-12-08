import React from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewsList({ reviews }) {
  return (
    <div className="flex-col ">
      {reviews.map((review) => (
        <div key={review.name + review.rating} className="my-8">
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  );
}
