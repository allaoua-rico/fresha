import React from "react";
import PageH2Wrapper from "../assets/Wrappers/PageH2Wrapper";
import ReturnToButton from "./ReturnToButton";

export default function SmallScreenHeaderWHeadingAndReturn({
  className,
  headerText,
}) {
  return (
    <div className={className}>
      <ReturnToButton
        to={`/`}
        className="group w-fit"
        iconClassName="w-6 h-6 group-hover:stroke-gray-400 transition-all duration-300"
      />
      {headerText && (
        <div className="mt-md">
          <PageH2Wrapper>{headerText}</PageH2Wrapper>
        </div>
      )}
    </div>
  );
}
