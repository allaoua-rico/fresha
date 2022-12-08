import React from "react";

export default function LinkWrapper({ children, className }) {
  return (
    <span
      className={`text-blue-400 inline text-lg hover:underline transition-all duration-500 cursor-pointer ${className}`}
    >
      {children}
    </span>
  );
}
