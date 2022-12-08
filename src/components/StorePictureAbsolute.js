import React from "react";
import { Link } from "react-router-dom";

export default function StorePictureAbsolute({ storeLink, storeImage }) {
  return (
    <Link
      className="w-20 min-w-[80px] h-20 absolute -top-10 overflow-hidden flex justify-center border-2 rounded-lg"
      to={storeLink}
    >
      <img
        className="w-auto h-full max-w-max"
        src={storeImage}
        alt="store-image"
      />
    </Link>
  );
}
