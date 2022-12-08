import React from "react";

export default function LiWrapper({ children }) {
  return <li className="text-gray-500 hover:text-secondarytextColor py-2">{children}</li>;
}
