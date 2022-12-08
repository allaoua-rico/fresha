import React from "react";

export default function BlackButtonWrapper(props) {
  return (
    <button
      {...props}
      className={`w-full flex justify-center items-center text-white hover:opacity-75 transition-all duration-300 bg-[#101928] py-3 px-8 text-lg rounded-md font-semibold  ${props.className}`}
    >
      {props.children}
    </button>
  );
}
