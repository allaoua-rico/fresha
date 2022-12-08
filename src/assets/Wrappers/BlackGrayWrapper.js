import React from "react";

export default function BlackGrayWrapper({ children }) {
  return (
    <div className="w-full hover:text-secondarytextColor cursor-pointer transition-all duration-200">
      {children}
    </div>
  );
}
