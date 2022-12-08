import React from "react";

export default function WhiteButtonWrapper(props) {
  return (
    <button
      {...props}
      className={`w-full justify-center flex font-medium text-lg rounded-md border-[2px] border-secondaryBg hover:border-black transition-all duration-200 py-3 px-4 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
