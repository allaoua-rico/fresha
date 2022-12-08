import { LinearProgress, Rating } from "@mui/material";
import React, { useState } from "react";

export default function ReviewFilter({ totalRatings }) {
  const [progress, setProgress] = useState(20);

  return (
    <div>
      <div className="text-lg font-semibold mb-2">Filter by rating</div>
      <div>
        {ratings.map((rating,index) => (
          <div key={index + rating} className="py-2 flex items-center">
            <input
              className="shadow-md form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              id="flexCheckDefault"
            />
            <Rating value={rating.value} readOnly />
            <div className="flex-1">
              <LinearProgress
                variant="determinate"
                style={{
                  backgroundColor: "#e8e8ee",
                  height: 6,
                  borderRadius: 5,
                }}
                sx={{
                  "& .MuiLinearProgress-bar1Determinate": {
                    backgroundColor: "#faaf00",
                    borderRadius: 5,
                  },
                }}
                value={(rating.totalReviews * 100) / totalRatings}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const ratings = [
  { value: 1, totalReviews: 212 },
  { value: 2, totalReviews: 25 },
  { value: 3, totalReviews: 13 },
  { value: 4, totalReviews: 7 },
  { value: 5, totalReviews: 4 },
];
