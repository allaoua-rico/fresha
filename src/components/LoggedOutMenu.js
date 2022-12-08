import React, { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";
import BlackGrayWrapper from "../assets/Wrappers/BlackGrayWrapper";

export default function LoggedOutMenu() {
  const [{ user }, dispatch] = useStateValue();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="flex items-center">
      <div className="hidden lg:flex">
        {/* <Link to="/user-flow">
          <div className=" px-3">
            <BlackGrayWrapper>Sign up</BlackGrayWrapper>
          </div>
        </Link> */}
        <Link to="/user-flow">
          <div className=" px-3">
            <BlackGrayWrapper>Log in</BlackGrayWrapper>
          </div>
        </Link>
      </div>
      <button
        onClick={handleOpenUserMenu}
        className="flex items-center hover:text-secondarytextColor transition-all duration-200"
      >
        {anchorElUser ? (
          <>
            <div className="mr-2 ">Close</div>
            <IoMdClose className="w-8 h-8" />
          </>
        ) : (
          <>
            <div className="mr-2 ">Menu</div>
            <GiHamburgerMenu className="w-8 h-8" />
          </>
        )}
      </button>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {loggedOutMenuList.map((setting) => (
          <MenuItem
            sx={
              setting.label === "Sign up" || setting.label === "Log in"
                ? {
                    display: { xs: "flex", lg: "none" },
                  }
                : {}
            }
            key={setting.label}
            onClick={handleCloseUserMenu}
          >
            <Typography sx={{ width: "100%" }} textAlign="center">
              <Link to={setting.link} className="flex items-center">
                <BlackGrayWrapper>{setting.label}</BlackGrayWrapper>
              </Link>
            </Typography>
          </MenuItem>
        ))}
        <MenuItem key={"toggleUserState"} onClick={handleCloseUserMenu}>
          <Typography sx={{ width: "100%" }} textAlign="center">
            <button
              onClick={() => {
                console.log("here");
                dispatch({ type: "SET_USER", user: {} });
              }}
              className="flex items-center w-full"
            >
              <BlackGrayWrapper>ToggleUser</BlackGrayWrapper>
            </button>
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
const loggedOutMenuList = [
  // { label: "Sign up", link: "/auth?type=signup" },
  { label: "Log in", link: "/user-flow" },
  { label: "Download the app", link: "/download-app" },
  { label: "Customer support", link: "/contact-us" },
];
