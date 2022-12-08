import React, { useState } from "react";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import ServiceAccordion from "./ServiceAccordion";
import ServiceDialog from "./ServiceDialog";

export default function ServiceCard({ md, service,selected }) {
  const [open, setOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);

  const handleOpenDialog = (event) => {
    setOpen(true);
  };

  const handleToggleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <div className="w-full ">
      <div
        className="p-md  md:px-xl flex group flex-col cursor-pointer w-full "
        onClick={() => (md ? handleToggleAccordion() : handleOpenDialog())}
      >
        <div className="w-full flex">
          <IoEllipsisHorizontalCircle className="mr-3 w-12 h-12 stroke-[1px] transition-all duration-300 group-hover:fill-blue-300 group-hover:stroke-blue-300" />
          <div className="w-full">
            <div className="flex justify-between  w-full">
              <div>
                <h4 className="text-lg font-semibold">
                  {service.title}{" "}
                  <span className="text-base font-semibold">
                    {service.title2}
                  </span>
                </h4>
                <h5 className="text-secondarytextColor ">{service.duration}</h5>
              </div>
              <div>
                <div className="text-secondarytextColor text-right">From</div>
                <strong className="font-semibold text-lg">
                  SAR {service.Starterprice}
                </strong>
              </div>
            </div>
            <p className="mt-2">
              Kindly choose one of the below:
              <ul>
                {service?.options.map((opt, index) => (
                  <li key={opt.title + index}>-{opt.title}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
        <ServiceDialog
          service={service}
          openHandler={open && true}
          closeHandler={(e) => setOpen(!open)}
        />
      </div>
      <div className="hidden md:flex w-full ">
        <ServiceAccordion service={service} openHandler={openAccordion} />
      </div>
    </div>
  );
}
