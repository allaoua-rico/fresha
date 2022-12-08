import React from "react";
import HorGrayLine from "./HorGrayLine";
import { MdOutlineAdd } from "react-icons/md";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";
import ProfileCardHeading from "../assets/Wrappers/ProfileCardHeading";

export default function ProfilePaymentMethods({ className, px }) {
  return (
    <div className={className + " bg-white rounded-lg"}>
      <div className={`${px}`}>
        <ProfileCardHeading>My payment methods</ProfileCardHeading>
        <p>Securely save your card details for hassle-free payments.</p>
      </div>
      <HorGrayLine />
      <button className={`flex items-center ${px}`}>
        <div className="border border-blue-400 mr-3 rounded-full">
          <MdOutlineAdd className="fill-blue-400" />
        </div>
        <LinkWrapper className="font-base">Add payment method</LinkWrapper>
      </button>
    </div>
  );
}
