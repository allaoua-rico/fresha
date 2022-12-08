import React from "react";
import { useState } from "react";
import HeaderSearch from "./HeaderSearch";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";

export default function HeaderLg() {
  const [{ user }, dispatch] = useStateValue();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <header className="w-full flex justify-center py-3 shadow-lg z-30 sticky top-0 bg-white ">
      <div className=" w-full max-w-pMaxW flex items-center px-xl xl:px-20">
        <Link to="/" className="text-3xl pr-[40px] ">
          Fresha
        </Link>

        <div className="flex-1 flex justify-start items-center">
          <HeaderSearch />
          <div className="hidden lg:flex ml-2 text-xl mr-2">
            in<button className="text-blue-400  ml-2"> Country</button>
          </div>
        </div>
        <div className="ml-4">
          {user ? (
            <LoggedInMenu
              anchor={anchorElUser}
              handleClose={() => handleCloseUserMenu()}
            />
          ) : (
            <LoggedOutMenu
              anchor={anchorElUser}
              handleClose={() => handleCloseUserMenu()}
            />
          )}
        </div>
      </div>
    </header>
  );
}
