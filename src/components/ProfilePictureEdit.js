import { Badge } from "@mui/material";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";
import ProfileCardHeading from "../assets/Wrappers/ProfileCardHeading";

export default function ProfilePictureEdit({ className }) {
  return (
    <div className={className}>
      <Badge
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        overlap="circular"
        badgeContent={
          <div className="p-2 bg-blue-500 rounded-full border-white border-[2px]">
            <FiEdit2 className="w-3 h-3 stroke-white" />
          </div>
        }
      >
        <img src="images/profileImg.png" className="rounded-full w-32 h-32 " />
      </Badge>
      <div className="py-md hidden md:block">
        <ProfileCardHeading>JOHN Doe</ProfileCardHeading>
        <LinkWrapper>
          <Link to="edit-profile">Edit basic info</Link>
        </LinkWrapper>
      </div>
    </div>
  );
}
