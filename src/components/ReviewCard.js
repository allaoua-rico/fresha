import { Avatar, Rating } from "@mui/material";
import React from "react";

export default function ReviewCard({ review }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Avatar
          sx={{
            bgcolor: "rgb(229, 241, 255)",
            color: "rgb(3, 122, 255)",
            width: "60px",
            height: "60px",
            fontWeight: "600",
          }}
        >
          {review.name.split(" ").map((part) => part[0])}
        </Avatar>
        <div className="pl-4">
          <div className="text-lg">{review.name}</div>
          <div className="text-sm text-secondarytextColor">{review.date}</div>
        </div>
      </div>
      <div className="pt-3">
        <Rating name="rating" value={review.rating} readOnly />
      </div>
    </div>
  );
}
