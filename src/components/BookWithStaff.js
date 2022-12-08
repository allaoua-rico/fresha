import { Avatar, Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HorGrayLine from "./HorGrayLine";
import RatingContainer from "./RatingContainer";
import db from "../db.json";

export default function BookWithStaff() {
  const { staff } = db;
  return (
    <div className="w-full">
      <div className="w-full px-md md:px-lg py-10">
        <div className="flex flex-col">
          <div className="flex justify-start w-full ">
            <h2 className="text-2xl font-bold mb-8">Book with staff</h2>
          </div>
          <div className="flex	overflow-auto whitespace-nowrap	scrollbar-hide ">
            {staff.map((el) => (
              <Link
                to={`/booking?employe=${el.id}`}
                key={el.name + el.rating}
                className="flex flex-col items-center flex-1 mx-3 md:mx-4 lg:mx-8 max-w-[100px]"
              >
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  badgeContent={<RatingContainer rating={el.rating} />}
                >
                  <Avatar
                    sx={{
                      bgcolor: "rgb(229, 241, 255)",
                      color: "rgb(3, 122, 255)",
                      width: "80px",
                      height: "80px",
                      fontWeight: "600",
                    }}
                  >
                    {el.name[0]}
                  </Avatar>
                </Badge>
                <div className="text-lg font-semibold text-center mt-3">
                  {el.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-md w-full md:block hidden my-8">
        <HorGrayLine />
      </div>
    </div>
  );
}
