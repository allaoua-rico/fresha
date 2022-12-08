import React from "react";
import HorGrayLine from "./HorGrayLine";
import { RiFacebookFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";
import ProfileCardHeading from "../assets/Wrappers/ProfileCardHeading";
import RedLinkWrapper from "./RedLinkWrapper";

export default function ProfileSocialLogins({ className,px }) {
  return (
    <div className={className + " bg-white rounded-lg"}>
      <div className={`pb-4 ${px}`}>
        <ProfileCardHeading>My social logins</ProfileCardHeading>
        <p>Link social profiles for easier access to your Fresha account.</p>
      </div>
      <HorGrayLine style={{}} />
      <div className={`${px}`}>
        <div className="flex justify-between py-md ">
          <div className="flex items-center ">
            <div className="p-2 border rounded-xl mr-md">
              <RiFacebookFill className="fill-[#3d5d98] w-6 h-6" />
            </div>
            <div>Facebook</div>
          </div>

          <LinkWrapper className="font-base">Connect</LinkWrapper>
        </div>
        <HorGrayLine style={{}} />

        <div className="flex justify-between py-md ">
          <div className="flex items-center ">
            <div className="p-2 border rounded-xl mr-md h-fit">
              <FcGoogle className="w-6 h-6" />
            </div>
            <div>Google</div>
          </div>
          <RedLinkWrapper className="font-base">Disconnect</RedLinkWrapper>
        </div>
      </div>
    </div>
  );
}
