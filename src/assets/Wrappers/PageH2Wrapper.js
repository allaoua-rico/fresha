import React from "react";

export default function PageH2Wrapper({ children,px }) {
  return (
    <div className={`flex justify-start w-full ${px}`}>
      <h2 className="text-4xl lg:text-3xl font-bold mb-8">{children}</h2>
    </div>
  );
}
