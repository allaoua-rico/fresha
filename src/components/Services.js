import React from "react";
import { Link } from "react-router-dom";
import HorGrayLine from "./HorGrayLine";
import ServicesList from "./ServicesList";
import Trinagle from "./Trinagle";

export default function Services({ landingPage }) {
  return (
    <div className=" w-full mb-7">
      <div className="flex flex-col w-full ">
        <h2 className="text-3xl font-semibold mb-10 px-xl">Services</h2>
        <div className="w-full flex ">
          <div className="w-5/12 mx-xl hidden md:block">
            <div className="text-lg font-semibold sticky top-20 flex cursor-pointer">
              <div className="bg-secondaryBg p-2 pl-5 w-full">Services</div>
              <Trinagle />
            </div>
          </div>
          <div className="w-full md:w-8/12">
            <ServicesList />
          </div>
        </div>
        <div className="px-md flex md:hidden my-8">
          <Link to="/services">
            <div className="text-blue-400 text-lg ">See all services</div>
          </Link>
        </div>
        <div className="px-md w-full md:block hidden my-4">
          <HorGrayLine />
        </div>
      </div>
    </div>
  );
}
