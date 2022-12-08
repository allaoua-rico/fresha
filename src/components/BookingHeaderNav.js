import React, { useEffect } from "react";
import { useState } from "react";
import { IoMdArrowBack, IoMdHeart } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function BookingHeaderNav() {
  let location = useLocation();
  const [to, setTo] = useState("/");
  const [displayReturn, setDisplayReturn] = useState(true);
  useEffect(() => {
    if (location.pathname === "/booking") {
      setTo("/");
      setDisplayReturn(true);
    } else if (location.pathname === "/booking/staff") {
      setDisplayReturn(false);
      setTo("/booking");
    } else if (location.pathname === "/booking/time") {
      setDisplayReturn(false);
      setTo("/booking/staff");
    } else if (location.pathname === "/booking/checkout") {
      setDisplayReturn(false);
      setTo("/booking/time");
    }
  }, [location]);

  return (
    <nav className="w-full z-50 h-14 flex justify-between items-center">
      <Link to={to}>
        <IoMdArrowBack className="w-8 h-8 fill-white hover:fill-secondarytextColor transition-all duration-300" />
      </Link>
      <Link to="/">
        <IoMdClose className="cursor-pointer fill-white hover:fill-secondarytextColor transition-all duration-300 stroke-1 w-8 h-8 " />
      </Link>
    </nav>
  );
}
