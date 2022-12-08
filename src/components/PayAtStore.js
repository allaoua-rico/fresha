import React from "react";
import { IoCashOutline } from "react-icons/io5";
import LiButtonWrapper from "../assets/Wrappers/LiButtonWrapper";

export default function PayAtStore() {
  return (
    <LiButtonWrapper>
      <div className="border bg-white border-gray-300  p-3 mr-6 rounded-xl">
        <IoCashOutline className="w-7 h-7 rotate-180  " />
      </div>
      <div className="font-semibold text-lg">Pay at store</div>
    </LiButtonWrapper>
  );
}
