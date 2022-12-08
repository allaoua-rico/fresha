import React from "react";
import BasicInfo from "./BasicInfo";
import ProfilePictureEdit from "./ProfilePictureEdit";
import RedLinkWrapper from "./RedLinkWrapper";

export default function ProfileSelfCard({ className, px }) {
  return (
    <div className={className + " bg-white rounded-lg md:divide-y"}>
      <ProfilePictureEdit
        className={`w-full flex md:flex-col justify-center items-center`}
      />
      <BasicInfo className={`py-xl ${px}`} />
      <RedLinkWrapper className="hidden md:flex justify-center">
        Log Out
      </RedLinkWrapper>
    </div>
  );
}
