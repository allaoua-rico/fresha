import React from "react";
import { Link } from "react-router-dom";

export default function StorePicture({ storeLink, storeImage,wh }) {
  return (
    <Link
      className="w-20 min-w-[80px] h-20 -top-10 overflow-hidden flex justify-center rounded-lg"
      to={storeLink}
      style={{ minWidth: wh, width: wh, height: wh }}
    >
      <img
        className="w-auto h-full max-w-max"
        src={storeImage}
        alt="store-image"
      />
    </Link>
  );
}
