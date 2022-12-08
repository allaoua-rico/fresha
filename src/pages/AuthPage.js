import React from "react";
import SmallScreenHeaderWHeadingAndReturn from "../components/SmallScreenHeaderWHeadingAndReturn";
import Auth from "./Auth";

export default function AuthPage() {
  return (
    <div className="flex flex-col items-start sm:items-center p-lg lg:py-xl lg:px-xxl bg-secondaryBg min-h-screen">
      <SmallScreenHeaderWHeadingAndReturn className="w-full pb-xl" />
      <div className="bg-white py-lg  rounded-lg">
        <div className="pb-lg px-xxl">
          <h1 className="font-bold text-2xl lg:text-3xl pb-2">
            Login as a customer
          </h1>
          <p className="text-secondarytextColor">
            Log in or sign up to book your first treatment today!
          </p>
        </div>
        <Auth className="px-md" />
      </div>
    </div>
  );
}
