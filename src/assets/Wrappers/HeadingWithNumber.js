import React from "react";

export default function HeadingWithNumber({ text, number, className }) {
  return (
    <div className={className}>
      <div className="flex items-center  pb-4">
        <h3 className="text-2xl font-bold">{text}</h3>
        <div className="bg-white rounded-full flex justify-center items-center w-5 h-5 ml-3 p-3 text-sm font-semibold">
          {number}
        </div>
      </div>
    </div>
  );
}
