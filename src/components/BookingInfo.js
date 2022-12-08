import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";
import { useMediaQuery } from "@mui/material";
import {
  resolveEmploye,
  resolveSelectedServicesArray,
} from "../utils/functions";
import theme from "./ui/Theme";
import BookingInfoTime from "./BookingInfoTime";
import BookingInfoStore from "./BookingInfoStore";
import HorGrayLine from "./HorGrayLine";
import BookingInfoServices from "./BookingInfoServices";
import BookingInfoTotal from "./BookingInfoTotal";
import EmployeAvatar from "./EmployeAvatar";
import StorePictureAbsolute from "./StorePictureAbsolute";
import BookingChooseOtherStaffButton from "./BookingChooseOtherStaffButton";

export default function BookingInfo() {
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  let location = useLocation();
  let [searchParams] = useSearchParams();
  const [{ booking }, dispatch] = useStateValue();
  const {
    name: storeName,
    location: storeLocation,
    images: storeImages,
    link: storeLink,
  } = booking.store;

  const staffLink = "/booking/staff?bookWithStaff=true";
  const firstParamemploye = booking?.bookWithStaff
    ? resolveEmploye(searchParams.get("employe"))
    : null;
  const selectedServices = resolveSelectedServicesArray(booking.services);
  return (
    <>
      {(location.pathname !== "/booking/checkout" ||
        (location.pathname === "/booking/checkout" && lg)) && (
        <Link
          onClick={(event) => {
            if (lg) event.preventDefault();
            dispatch({
              type: "SET_BOOKING_BOOKWITHSTAFF",
              bookWithStaff: true,
            });
          }}
          to={staffLink}
          className="flex bg-secondaryBg lg:cursor-default lg:bg-white w-full rounded-lg lg:flex-col items-center shadow-md"
        >
          {/*  Avater of employe/Picture of store */}
          <div className="flex justify-center items-center ml-3 mr-2 py-2 lg:px-10 lg:p-8 lg:pt-10 lg:mr-0">
            {firstParamemploye ? (
              <EmployeAvatar text={firstParamemploye.name} />
            ) : (
              <StorePictureAbsolute storeLink={storeLink} storeImage={storeImages[0]} />
            )}
          </div>
          {/* Infos about Employe/ Store */}
          <div className="flex flex-col lg:items-center py-2">
            <div className="font-medium text-lg  px-3 lg:px-10 text-left">
              {firstParamemploye ? firstParamemploye.name : storeName}
            </div>
            <p className="text-secondarytextColor lg:my-2 px-3 lg:px-10 text-left line-clamp-2 lg:line-clamp-none">
              {firstParamemploye && storeName + ", "}
              {storeLocation}
            </p>
            {firstParamemploye && (
              <BookingChooseOtherStaffButton staffLink={staffLink} />
            )}
            <div className="hidden w-full lg:flex flex-col items-center">
              <HorGrayLine style={{ marginTop: 0, marginBottom: 0 }} />
              {booking.time && (
                <>
                  <BookingInfoTime />
                  <HorGrayLine style={{ marginTop: 0, marginBottom: 0 }} />
                </>
              )}
              {booking.services.length > 0 ? (
                <div className="max-h-[20vh] overflow-auto">
                  <BookingInfoServices />
                </div>
              ) : (
                <div className="flex items-center justify-center py-4 text-secondarytextColor text-center">
                  No services selected yet
                </div>
              )}
              <HorGrayLine style={{ marginTop: 0, marginBottom: 0 }} />
              <BookingInfoTotal
                className="w-full px-10 py-md"
                selectedServices={selectedServices}
              />
            </div>
          </div>
        </Link>
      )}

      {location.pathname === "/booking/checkout" && (
        <div className="bg-secondaryBg lg:hidden">
          {booking.services.length > 0 ? (
            <>
              <div className="mx-xxl">
                <BookingInfoTime />
                <HorGrayLine style={{ marginTop: 0, marginBottom: 0 }} />
              </div>
              <div className="mx-xxl">
                <BookingInfoStore />
                <HorGrayLine style={{ marginTop: 0, marginBottom: 0 }} />
              </div>
              <>
                <BookingInfoServices />
                <HorGrayLine style={{ marginTop: 0, marginBottom: 0 }} />
              </>
              <div className="mx-xxl my-4">
                <BookingInfoTotal selectedServices={selectedServices} />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center text-secondarytextColor">
              No services selected yet
            </div>
          )}
        </div>
      )}
    </>
  );
}
