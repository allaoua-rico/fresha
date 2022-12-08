import React from "react";

export default function HorGrayLine(props) {
  // disableMarginY
  return (
    <hr
      className={`bg-secondarytextColor w-full ${props.className}`}
      style={{ marginTop: 24, marginBottom: 24 }}
      {...props}
    />
  );
}
