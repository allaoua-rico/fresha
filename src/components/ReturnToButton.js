import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ReturnToButton({ to, className, iconClassName }) {
  return (
    <Link to={to} className={className}>
      <BsArrowLeft className={iconClassName}/>
    </Link>
  );
}
