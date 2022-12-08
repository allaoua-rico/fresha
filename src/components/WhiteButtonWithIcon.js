import { KeyboardReturnOutlined } from "@mui/icons-material";
import React from "react";

export default function WhiteButtonWithIcon({ children, className, icon }) {
  return (
    <div className={"border " + className}>
      <button className="w-full border flex items-centerborder shadow-md font-semibold text-lg rounded-md">
        <div className="border-r h-[52px] p-sm ">{icon}</div>
        <div className="p-sm w-full text-center">{children}</div>
      </button>
    </div>
  );
}
