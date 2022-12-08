import React from "react";

export default function IsConfirmedGrayButtonWrapper({ children }) {
  return (
    <button className="flex flex-col justify-center items-center text-white group">
      <div className="flex flex-col justify-center items-center bg-gray-600 py-3 px-4 group-hover:bg-gray-400 transition-all duration-400 rounded-md">
        {children[0]}
      </div>
      {children[1]}
    </button>
  );
}
