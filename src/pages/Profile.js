import React from "react";
import ProfileAddressesCard from "../components/ProfileAddressesCard";
import ProfileSelfCard from "../components/ProfileSelfCard";
import SmallScreenHeaderWHeadingAndReturn from "../components/SmallScreenHeaderWHeadingAndReturn";
import PageWrapper from "../assets/Wrappers/PageWrapper";
import HeaderLg from "../components/HeaderLg";
import ProfilePaymentMethods from "../components/ProfilePaymentMethods";
import ProfileSocialLogins from "../components/ProfileSocialLogins";
import ProfileNotifications from "../components/ProfileNotifications";
import ProfileDeleteAccount from "../components/ProfileDeleteAccount";
import ProdileFavoritesAndList from "../components/ProdileFavoritesAndList";
import FooterPolicy from "../components/FooterPolicy";
import MainWrapper from "../assets/Wrappers/MainWrapper";
import { Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <PageWrapper bgColor="bg-secondaryBg pb-lg">
      {/* headers */}
      <div className="sticky-top bg-white">
        <SmallScreenHeaderWHeadingAndReturn className="py-md px-lg md:px-xxl md:hidden" />
      </div>
      <div className="hidden md:flex sticky-top z-[1030]">
        <HeaderLg />
      </div>

      {/* Content */}
      <MainWrapper maxWidth="max-w-screen-lg">
        <div className="flex flex-col md:p-lg lg:grid grid-cols-3 gap-x-lg w-full space-y-xl lg:space-y-0">
          <div className="col-span-1 w-full space-y-xl">
            <ProfileSelfCard
              className="pt-md pb-xl lg:sticky-top"
              px="px-lg md:px-xxl"
            />
            <ProfileAddressesCard
              className="py-md md:hidden"
              px="px-lg md:px-xxl"
            />
            <ProfileDeleteAccount className="md:hidden" px="px-lg" />
          </div>
          <div className="col-span-2 hidden md:block space-y-xl">
            <ProfileAddressesCard className="py-md" px="px-lg md:px-xxl" />
            <ProfileDeleteAccount className="md:hidden" px="px-lg" />
            <ProfilePaymentMethods className="pb-lg" px="px-lg md:px-xxl" />
            <ProfileSocialLogins className="pb-lg" px="px-lg md:px-xxl" />
            <ProfileNotifications px="px-lg md:px-xxl" />
            <ProfileDeleteAccount px="px-lg md:px-xxl" />
            <ProdileFavoritesAndList />
            <FooterPolicy />
          </div>
        </div>
      </MainWrapper>
      <Outlet />
    </PageWrapper>
  );
}
