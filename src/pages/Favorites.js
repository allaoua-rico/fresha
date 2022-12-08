import React from "react";
import SmallScreenHeaderWHeadingAndReturn from "../components/SmallScreenHeaderWHeadingAndReturn";
import PageWrapper from "../assets/Wrappers/PageWrapper";
import HeaderLg from "../components/HeaderLg";
import MainWrapper from "../assets/Wrappers/MainWrapper";
import { Outlet } from "react-router-dom";
import BlackButtonWrapper from "../assets/Wrappers/BlackButtonWrapper";
import PageH2Wrapper from "../assets/Wrappers/PageH2Wrapper";
import { IoTicketOutline } from "react-icons/io5";

export default function Favorites() {
  return (
    <PageWrapper bgColor="bg-white pb-lg">
      {/* headers */}
      <div className="sticky-top bg-white px-lg  md:hidden">
        <SmallScreenHeaderWHeadingAndReturn className="py-md md:px-xxl" />
        <PageH2Wrapper px="">My Favorites</PageH2Wrapper>
      </div>
      <div className="hidden md:flex sticky-top z-[1030]">
        <HeaderLg />
      </div>

      {/* Content */}
      <MainWrapper maxWidth="max-w-screen-lg">
        <div className="h-screen flex flex-col justify-center items-center">
          <IoTicketOutline className="w-10 h-10" />
          <div className="flex flex-col items-center pt-3">
            <div className="text-xl font-semibold">
              You have no Active favorites
            </div>
            <p>Find salons to buy a favorites or book a service.</p>
          </div>
          <div className="pt-7">
            <BlackButtonWrapper>Find salons near you</BlackButtonWrapper>
          </div>
        </div>
      </MainWrapper>
      <Outlet />
    </PageWrapper>
  );
}
