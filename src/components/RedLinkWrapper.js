import React from "react";
import { useStateValue } from "../state/stateProvider";

export default function RedLinkWrapper({ className,children }) {
  const [{}, dispatch] = useStateValue();
  return (
    <div className={className}>
      <button
        onClick={() => dispatch({ type: "SET_USER", user: undefined })}
        className="text-red-500 text-lg text-center pt-md hover:underline transition-all duration-500"
      >
        {children}
        
      </button>
    </div>
  );
}
