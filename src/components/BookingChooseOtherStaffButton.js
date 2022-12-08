import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";

export default function BookingChooseOtherStaffButton({ staffLink }) {
  const [{}, dispatch] = useStateValue();
  return (
    <Link
      className="hidden lg:block px-10 lg:px-8 mb-2 text-blue-500"
      to={staffLink}
      onClick={() =>
        dispatch({
          type: "SET_BOOKING_BOOKWITHSTAFF",
          bookWithStaff: true,
        })
      }
    >
      Choose other staff
    </Link>
  );
}
