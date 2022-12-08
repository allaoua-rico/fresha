import React, { useEffect, useState } from "react";
import { useStateValue } from "../state/stateProvider";
import { useNavigate } from "react-router-dom";
import db from "../db.json";
import HorGrayLine from "../components/HorGrayLine";
import { Avatar } from "@mui/material";
import { MdStar } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { resolveEmploye } from "../utils/functions";
import { useOutletContext } from "react-router-dom";

export default function Staff() {
  const [clicked, setClicked] = useState(false);
  let navigate = useNavigate();
  const [{ booking }, dispatch] = useStateValue();
  const [bookingHeaderHeight, setCount] = useOutletContext();

  useEffect(() => {
    if (booking.bookWithStaff) return;
    (!booking?.services || booking?.services?.length == 0) &&
      navigate("/booking");
  }, []);

  useEffect(() => {
    const to = !booking.services.length
      ? "/booking?employe=" + booking?.employe?.id
      : "/booking/time";
    booking?.employe?.id?.toString() && clicked && navigate(to);
  }, [booking]);

  return (
    <div className="rounded-md -z-50">
      <div
        style={{ top: bookingHeaderHeight }}
        className="sticky z-50 bg-white rounded-t-md px-lg shadow-md"
      >
        <div className="w-full flex items-center py-3 px-4">
          <Avatar
            sx={{
              bgcolor: "rgb(229, 241, 255)",
              color: "rgb(3, 122, 255)",
              width: "60px",
              height: "60px",
              fontWeight: "600",
            }}
          >
            <IoPeopleOutline />
          </Avatar>
          <div className="flex-1 text-left text-lg font-semibold ml-4 ">
            No preference
          </div>
          <IoIosArrowForward className="ml-5" />
        </div>
      </div>
      <div className="w-full ">
        {db.staff.map((emp, index) => (
          <div
            onClick={() => {
              dispatch({
                type: "SET_BOOKING_EMPLOYE",
                employe: resolveEmploye(emp.id),
              });
              setClicked(true);
            }}
            key={emp.id + index}
            className="hover:bg-secondaryBg  px-lg transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center py-3 px-5">
              <Avatar
                sx={{
                  bgcolor: "rgb(229, 241, 255)",
                  color: "rgb(3, 122, 255)",
                  width: "60px",
                  height: "60px",
                  fontWeight: "600",
                }}
              >
                {emp.name[0]}
              </Avatar>
              <div className="flex-1 text-left text-lg font-semibold ml-4 ">
                {emp.name}
              </div>
              <div className="text-lg font-semibold text-center ml-4">
                <div className="flex items-center">
                  <MdStar className="fill-[#faaf00] w-6 h-6" />
                  <div>{emp.rating}</div>
                </div>
              </div>
              <IoIosArrowForward className="ml-5" />
            </div>
            {index < db.staff.length - 1 && (
              <div className="-my-6 ml-6 lg:ml-0">
                <HorGrayLine />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
