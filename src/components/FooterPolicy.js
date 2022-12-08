import React from "react";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";

export default function FooterPolicy() {
  return (
    <div className="flex justify-center items-center text-lg">
      © Fresha.com SV Ltd |{" "}
      <LinkWrapper className={"px-1"}>Terms of Use</LinkWrapper> |
      <LinkWrapper className={"px-1"}>Privacy Policy</LinkWrapper>
    </div>
  );
}
