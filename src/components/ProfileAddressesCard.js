import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";
import ProfileCardHeading from "../assets/Wrappers/ProfileCardHeading";

export default function ProfileAddressesCard({ className, px }) {
  return (
    <div className={className + " bg-white rounded-lg divide-y"}>
      <div className={`${px}`}>
        <ProfileCardHeading>My addresses</ProfileCardHeading>
      </div>
      <div>
        <button className={`flex items-center mt-3 ${px}`}>
          <div className="border border-blue-400 mr-3 rounded-full">
            <MdOutlineAdd className="fill-blue-400" />
          </div>
          <Link to="/profile/address">
            <LinkWrapper className="font-base">Add new address</LinkWrapper>
          </Link>
        </button>
      </div>
    </div>
  );
}
