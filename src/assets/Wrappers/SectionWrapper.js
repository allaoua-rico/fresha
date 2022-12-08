import React from "react";

export default function SectionWrapper({ children }) {
  return (
    <div className="w-full">
      <div className="w-full px-md md:px-xl lg:px-xxl py-10">
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
}
