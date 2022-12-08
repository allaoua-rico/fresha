import React from "react";
import TopInfo from "../components/TopInfo";
import TopSectionAbout from "../components/TopSectionAbout";
import TopSlider from "../components/TopSlider";

export default function () {
  return (
    <div className="w-full pb-4">
      <div className="overflow-hidden w-full md:h-[440px] lg:min-h-[512px] flex flex-col items-center md:flex-row-reverse  md:justify-between lg:px-6 ">
        <div className="w-full h-full md:w-6/12 lg:w-7/12">
          <TopSlider />
        </div>
        <div className="w-4"></div>
        <div className="w-full md:h-full md:w-6/12 lg:w-5/12">
          <TopInfo />
        </div>
      </div>
      <div className="lg:px-12 md:px-10 w-full">
        <div className="hidden md:flex w-full ">
          <TopSectionAbout />
        </div>
      </div>
    </div>
  );
}
