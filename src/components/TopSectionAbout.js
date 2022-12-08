import React from "react";
import BusinessHoursAccordion from "./BusinessHoursAccordion";
import HorGrayLine from "./HorGrayLine";
import InstantConfirmAndWomenOnly from "./InstantConfirmAndWomenOnly";
import Location from "./Location";

export default function TopSectionAbout() {
  return (
    <div className="flex w-full mt-10">
      <div className="w-7/12">
        <h2 className="text-3xl font-bold mb-3">About Mellow Nails Artistry</h2>
        <div className="-ml-6">
          <InstantConfirmAndWomenOnly />
        </div>
        <p className="mt-3 text-lg">
          Mellow is an innovative and inclusive Nails destination. One of the
          most senses fulfilling atmospheric Nails experiences you can have. It
          will help your mind to be absent “the good way” by giving you easy and
          practical beauty solutions.
        </p>
      </div>
      <div className="w-6"></div>
      <div className="w-5/12">
        <h3 className="text-3xl font-bold mb-4">Location</h3>
        <Location textColor="black" aboutSection={true} />
        <div className="-ml-5">
          <HorGrayLine />
          <BusinessHoursAccordion locationSection={true} />
        </div>
      </div>
    </div>
  );
}
