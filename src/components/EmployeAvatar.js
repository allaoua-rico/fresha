import { Avatar, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "./ui/Theme";

export default function EmployeAvatar({ text }) {
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className="w-14 lg:w-20 h-14 lg:h-20 lg:absolute lg:-top-10 flex justify-center items-center lg:border-2 border-white rounded-full overflow-hidden">
      <Avatar
        sx={
          lg
            ? {
                bgcolor: "rgb(229, 241, 255)",
                color: "rgb(3, 122, 255)",
                width: "80px",
                height: "80px",
                fontWeight: "600",
              }
            : {
                bgcolor: "#e7e8e9",
                color: "black",
                width: "56px",
                height: "56px",
                fontWeight: "600",
              }
        }
      >
        {text[0]}
      </Avatar>
    </div>
  );
}
