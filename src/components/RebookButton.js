import React from "react";
import GrayButtonWrapper from "../assets/Wrappers/RebookGrayButtonWrapper";
import { MdOutlineEditCalendar } from "react-icons/md";

export default function RebookButton({ className }) {
  return (
    <div className={className}>
      <GrayButtonWrapper>
        <MdOutlineEditCalendar className="w-7 h-7" />
        <div className="ml-2 lg:ml-0 lg:mt-1 font-semibold">Rebook</div>
      </GrayButtonWrapper>
    </div>
  );
}
