import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import SmallScreenHeaderWHeadingAndReturn from "../components/SmallScreenHeaderWHeadingAndReturn";

export default function UserFlow() {
  return (
    <div className="flex flex-col items-start sm:items-center p-lg lg:py-xl lg:px-xxl bg-secondaryBg min-h-screen">
      <SmallScreenHeaderWHeadingAndReturn className="w-full pb-xl" />
      <h1 className="font-bold text-2xl lg:text-3xl pb-xxl">
        Sign up / log in
      </h1>
      <div className="flex flex-col items-center w-full">
        <Link
          to="/auth"
          className="flex items-center justify-between px-xxl py-xl lg:p-xxl bg-white rounded-2xl shadow-lg w-full max-w-xl mb-lg"
        >
          <div className="text-left">
            <div className="text-2xl lg:text-4xl font-bold">For everyone</div>
            <div className="text-lg lg:text-xl mt-1">
              Book salons and spas near you
            </div>
          </div>
          <BsArrowRight className="w-6 h-6" />
        </Link>
        <button className="flex items-center justify-between px-xxl py-xl lg:p-xxl bg-[#101928] text-white rounded-2xl shadow-lg w-full max-w-xl mb-lg">
          <div className="text-left">
            <div className="text-2xl lg:text-4xl font-bold">For businesses</div>
            <div className="text-lg lg:text-xl mt-1">
              Manage and grow your business
            </div>
          </div>
          <BsArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
