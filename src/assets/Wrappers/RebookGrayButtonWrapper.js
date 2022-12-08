import React from "react";

export default function RebookGrayButtonWrapper({ children }) {
  return (
    <div>
      <button className="flex lg:hidden justify-center items-center w-full md:w-fit bg-gray-600 text-white py-3 px-4 hover:bg-gray-400 transition-all duration-400 rounded-md">
        {children}
      </button>
      <button className="hidden lg:flex flex-col justify-center items-center text-white group">
        <div className="w-full md:w-fit bg-gray-600 py-3 px-4 group-hover:bg-gray-400 transition-all duration-400 rounded-md">
          {children[0]}
        </div>
        {children[1]}
      </button>
    </div>
  );
}
