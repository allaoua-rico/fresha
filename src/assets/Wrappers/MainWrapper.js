import React from "react";

export default function MainWrapper({ children, maxWidth }) {
  return (
    <div
      className={
        `max-w-pMaxW mx-auto w-full flex flex-col items-center ` + ` ${maxWidth} `
      }
    >
      {children}
    </div>
  );
}
