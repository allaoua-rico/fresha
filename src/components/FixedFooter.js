import React, { useEffect, useState, forwardRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BlackButtonWrapper from "../assets/Wrappers/BlackButtonWrapper";
import MainWrapper from "../assets/Wrappers/MainWrapper";
import { useStateValue } from "../state/stateProvider";
import { resolveSelectedServicesArray } from "../utils/functions";

const FixedFooter = forwardRef(({ landingpage, translate }, ref) => {
  const [{ booking }] = useStateValue();
  const selectedServices = resolveSelectedServicesArray(booking.services);
  const total = selectedServices.reduce((accumulator, service) => {
    return accumulator + service?.option?.price;
  }, 0);
  let location = useLocation();
  let navigate = useNavigate();
  return (
    <div
      ref={ref}
      className={
        "px-xl fixed-bottom  border bg-white w-full flex justify-center items-center py-2 transition-all duration-500 " +
        (translate ? " -bottom-1/2" : " bottom-0")
        +
        (landingpage ? " sticky bottom-0" : " fixed-bottom ")
      }
    >
      <MainWrapper>
        {landingpage ? (
          <div className="w-full flex items-center justify-between lg:px-xxl lg:mx-xxl ">
            <div className="hidden md:flex">Mellow Nails Artistry</div>
            <div className="w-full md:w-fit flex justify-between md:justify-center items-center">
              <div className="whitespace-nowrap ">46 services availables</div>
              <div className="ml-5">
                <BlackButtonWrapper>
                  <Link to="/booking">Book Now</Link>
                </BlackButtonWrapper>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-between">
            <div>
              <div>{booking.services.length} services</div>
              <div>SAR {total} </div>
            </div>
            <div>
              <BlackButtonWrapper
                onClick={
                  (e) => {
                    e.preventDefault();
                    const to =
                      location.pathname == "/booking/checkout"
                        ? "/appointments/2"
                        : location.pathname === "/booking" &&
                          booking?.employe?.id?.toString()
                        ? "/booking/time"
                        : "/booking/staff";
                    navigate(to);
                  }
                  // setDisplayServices()
                }
                disabled={translate}
                className
              >
                {location.pathname === "/booking"
                  ? "Book Now"
                  : location.pathname === "/booking/checkout" && "Confirm"}
              </BlackButtonWrapper>
            </div>
          </div>
        )}
      </MainWrapper>
    </div>
  );
});
export default FixedFooter;
