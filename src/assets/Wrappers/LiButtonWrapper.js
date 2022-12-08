import React from "react";

export default function LiButtonWrapper({ children }) {
  return (
    <button className="w-full flex items-center px-xxl py-lg bg-white hover:bg-secondaryBg duration-500 transition-all">
      {children}
    </button>
  );
}
