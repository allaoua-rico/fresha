import { useState } from "react";
import HeaderSearch from "./HeaderSearch";
import { IoMdArrowBack, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";

export default function Header() {
  const [{ user }, dispatch] = useStateValue();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [liked, setLiked] = useState(false);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header className="w-full flex justify-center py-3 shadow-lg z-30 sticky top-0 bg-white ">
      <div className="hidden w-full max-w-pMaxW md:flex items-center px-xl xl:px-20">
        <Link to="/" className="text-3xl pr-[40px] ">
          Fresha
        </Link>

        <div className="flex-1 flex justify-start items-center">
          <HeaderSearch />
          <div className=" hidden lg:flex ml-2 text-xl mr-2">
            in<button className="text-blue-400  ml-2"> Country</button>
          </div>
        </div>

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
      <div className="flex md:hidden w-full justify-between max-w-pMaxW px-xl xl:px-20">
        <div className="flex items-center justify-between">
          <Link to="/">
            <IoMdArrowBack className="w-8 h-8 hover:fill-secondarytextColor transition-all duration-300" />
          </Link>
          <div className="ml-3">Mellow Nails Artistry</div>
        </div>
        <div className="absolute flex justify-center w-full">
          <IoMdHeart
            onClick={() => setLiked(!liked)}
            className={
              "cursor-pointer stroke-white stroke-1 w-8 h-8 " +
              (liked ? "fill-gray-400" : "animate-heart fill-red-500")
            }
          />
        </div>
        <>
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
        </>
      </div>
    </header>
  );
}
