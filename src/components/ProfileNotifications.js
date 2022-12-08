import React from "react";
import HorGrayLine from "./HorGrayLine";
import ProfileCardHeading from "../assets/Wrappers/ProfileCardHeading";
import TextMsgApptNotif from "./TextMsgApptNotif";

export default function ProfileNotifications({ className, px }) {
  return (
    <div className={className + " bg-white rounded-lg"}>
      <div className={`pb-4 ${px}`}>
        <ProfileCardHeading>My notifications</ProfileCardHeading>
        <p>
          We'll send you updates about your appointments, news and marketing
          offers.
        </p>
      </div>
      <HorGrayLine style={{}} />
      <div className={`w-full grid grid-cols-1 gap-y-lg pt-md pb-xl ${px}`}>
        <TextMsgApptNotif
          text={"Text message appointment notifications"}
          desc={"Receive texts based on your sender's settings"}
        />
        <TextMsgApptNotif
          text={"Receive texts based on your sender's settings"}
          desc={"Receive offers and news via email"}
        />
        <TextMsgApptNotif
          text={"Text message marketing notifications"}
          desc={
            "If you opted out previously by texting STOP, please reply with START to opt back in"
          }
        />
      </div>
    </div>
  );
}
