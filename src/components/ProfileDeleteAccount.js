import React from "react";
import ProfileCardHeading from "../assets/Wrappers/ProfileCardHeading";
import RedLinkWrapper from "./RedLinkWrapper";

export default function ProfileDeleteAccount({ className, px }) {
  return (
    <div className={className + " bg-white rounded-lg divide-y"}>
      <div className={`pb-md ${px}`}>
        <ProfileCardHeading>Delete account</ProfileCardHeading>
        <p>Are you sure you want to leave Fresha?</p>
      </div>


      <RedLinkWrapper className={`pb-xl ${px}`}>
        Delete my account
      </RedLinkWrapper>
    </div>
  );
}
