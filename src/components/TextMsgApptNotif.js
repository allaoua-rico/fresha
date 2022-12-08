import React, { useState } from "react";
import IOSSwitch from "./IOSSwitch";

export default function TextMsgApptNotif({ text, desc }) {
  const [checked, setChecked] = useState(true);
  return (
    <button
      onClick={() => setChecked(!checked)}
      className="flex justify-between w-full"
    >
      <div className="text-left">
        <div className="font-semibold">{text}</div>
        <div className="text-secondarytextColor mt-2">{desc}</div>
      </div>
      <div>
        <IOSSwitch sx={{ m: 1 }} checked={checked} />
      </div>
    </button>
  );
}
