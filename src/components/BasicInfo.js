import React from "react";
import { Link } from "react-router-dom";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";
import ProfileCardHeading from "../assets/Wrappers/ProfileCardHeading";

export default function BasicInfo({ className }) {
  return (
    <div className={className}>
      <div className="flex justify-between py-md md:hidden">
        <ProfileCardHeading>Basic info</ProfileCardHeading>
        <LinkWrapper>
          <Link to="edit-profile">Edit</Link>
        </LinkWrapper>
      </div>
      <div className="grid gap-y-4">
        <div>
          <div className="font-semibold">First name </div>
          <div className="text-lg font-[350]">First name</div>
        </div>
        <div>
          <div className="font-semibold">Last name </div>
          <div className="text-lg font-[350]">Last name</div>
        </div>
        <div>
          <div className="font-semibold">Mobile number</div>
          <div className="text-lg font-[350]">+213 555 555 55</div>
        </div>
        <div>
          <div className="font-semibold">Email address</div>
          <div className="text-lg font-[350]">allaoua.boudriou@gmail.com</div>
        </div>
        <div>
          <div className="font-semibold">Date of birth</div>
          <div className="text-lg font-[350]">18 Jul 1997</div>
        </div>
        <div>
          <div className="font-semibold">Gender</div>
          <div className="text-lg font-[350]">Male</div>
        </div>
      </div>
    </div>
  );
}
