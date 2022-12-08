import React from "react";
import BlackButtonWrapper from "../assets/Wrappers/BlackButtonWrapper";
import WhiteButtonWrapper from "../assets/Wrappers/WhiteButtonWrapper";

export default function EditProfileActions({
  className,
  submitForm,
  handleClose,
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-x-md py-md px-md md:mx-xxl lg:mx-0 sticky-bottom border-t bg-white ${className} `}
    >
      <WhiteButtonWrapper className="py-2" onClick={handleClose}>
        Close
      </WhiteButtonWrapper>
      <BlackButtonWrapper onClick={() => submitForm()} className="py-2">
        Save
      </BlackButtonWrapper>
    </div>
  );
}
