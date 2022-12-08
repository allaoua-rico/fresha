import React from "react";
import BusinessHoursAccordion from "./BusinessHoursAccordion";
import InstantConfirmAndWomenOnly from "./InstantConfirmAndWomenOnly";
import HorGrayLine from "./HorGrayLine";
import Location from "./Location";
import RatingComp from "./RatingComp";
import BlackButtonWrapper from "../assets/Wrappers/BlackButtonWrapper";
import { Link } from "react-router-dom";

export default function TopInfo() {
  return (
    <div className="md:bg-secondaryBg h-full py-10 lg:py-16 xl:px-8">
      <div className="px-md md:px-8">
        <div className="flex flex-col  md:flex-col-reverse">
          <h1 className="text-2xl md:text-5xl font-semibold md:font-bold mb-2">
            Mellow Nails Artistry
          </h1>
          <h3 className="text-secondarytextColor md:text-lg lg:mb-2">
            Nail Salon
          </h3>
        </div>
        <div className="my-3">
          <Location textColor="gray" />
        </div>
        <RatingComp />
      </div>
      <div className="md:hidden">
        <div className="-mb-6">
          <HorGrayLine />
        </div>
        <div className="mb-4 -mx-6">
          <BusinessHoursAccordion />
          <div className="px-md">
            <InstantConfirmAndWomenOnly />
          </div>
        </div>
        <HorGrayLine />
        <div className="px-md">
          <p>
            Mellow is an innovative and inclusive Nails destination. One of the
            most senses fulfilling atmospheric Nails experiences you can have.
            It will help your mind to be absent “the good way” by giving you
            easy and practical beauty solutions.
          </p>
        </div>
        <HorGrayLine />
      </div>
      <div className="px-8 hidden md:block md:mt-8 ff">
        <Link to="/booking">
          <BlackButtonWrapper>Book Now</BlackButtonWrapper>
        </Link>
      </div>
    </div>
  );
}
