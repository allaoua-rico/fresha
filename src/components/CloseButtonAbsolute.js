import React from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

export default function CloseButtonAbsolute({
  to,
  className,
  iconClassName,
  onClick,
}) {
  return (
    <Link
      onClick={onClick}
      style={{ position: "absolute" }}
      className={className}
      to={to}
    >
      <IoCloseOutline className={iconClassName} />
    </Link>
  );
}
