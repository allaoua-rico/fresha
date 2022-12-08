import React, { useEffect, useState } from "react";
import { IoCardOutline, IoCalendarClearOutline } from "react-icons/io5";
import { GrTicket, GrDocumentVerified } from "react-icons/gr";
import { AiOutlineShopping } from "react-icons/ai";
import { FiGlobe, FiLogOut } from "react-icons/fi";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { IoIosArrowDown, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";
import LanguageDialog from "./LanguageDialog";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";

export default function LoggedInMenu({ anchor, handleClose }) {
  const [{}, dispatch] = useStateValue();
  const [anchorElUser, setAnchorElUser] = useState(anchor);
  const [open, setOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    handleClose();
    setAnchorElUser(null);
  };
  useEffect(() => {
    anchor && setAnchorElUser(anchor);
  }, [anchor]);
  const loggedInMenuList = [
    {
      label: "My appointments",
      icon: <IoCalendarClearOutline />,
      link: "/appointments",
    },
    { label: "My vouchers", icon: <GrTicket />, link: "/vouchers" },
    { label: "My memberships", icon: <IoCardOutline />, link: "/memberships" },
    { label: "My favorites", icon: <IoMdHeart />, link: "/favorites" },
    { label: "My forms", icon: <GrDocumentVerified />, link: "/" },
    { label: "My orders", icon: <AiOutlineShopping />, link: "/" },
    {
      label: "English",
      button: (
        <button onClick={() => setOpen(true)} className="flex items-center">
          <div className="pr-5">
            <FiGlobe />{" "}
          </div>
          English
        </button>
      ),
    },
    { label: "Logout", icon: <FiLogOut />, link: "/" },
  ];
  return (
    <div className="flex justify-end">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar />
        <IoIosArrowDown />
      </IconButton>
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
        <div className="p-md border-b">
          <div className="text-lg font-semibold">First Last</div>
          <LinkWrapper className="">
            <Link to="/profile">Settings</Link>
          </LinkWrapper>
        </div>
        {loggedInMenuList.map((setting) => {
          if (setting.label !== "Logout") {
            return (
              <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                <Typography sx={{ width: "100%" }} textAlign="center">
                  {setting.link ? (
                    <Link to={setting.link} className="flex items-center">
                      <div className="pr-5">{setting.icon}</div>
                      {setting.label}
                    </Link>
                  ) : (
                    <>{setting.button}</>
                  )}
                </Typography>
              </MenuItem>
            );
          } else {
            return (
              <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                <Typography sx={{ width: "100%" }} textAlign="center">
                  <button
                    onClick={() =>
                      dispatch({ type: "SET_USER", user: undefined })
                    }
                    className="flex items-center w-full "
                  >
                    <div className="pr-5">{setting.icon}</div>
                    {setting.label}
                  </button>
                </Typography>
              </MenuItem>
            );
          }
        })}
      </Menu>
      <LanguageDialog outOpen={open} outHandleClose={() => setOpen(false)} />
    </div>
  );
}
