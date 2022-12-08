import React, { useState } from "react";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";
import CloseButtonAbsolute from "../components/CloseButtonAbsolute";
import EditProfileActions from "../components/EditProfileActions";
import EditProfileForm from "../components/EditProfileForm";

export default function EditProfileDialogFullScreen({ handleClose }) {
  const [submit, setSubmit] = useState(false);
  function submitForm() {
    setSubmit(!submit);
  }
  return (
    <div className="bg-white w-full h-full relative md:rounded-xl px-md pb-xl">
      <div className="bg-white sticky-top h-14 lg:hidden">
        <CloseButtonAbsolute
          to={`/profile`}
          onClick={handleClose}
          className="top-md right-md group flex"
          iconClassName="w-7 h-7 group-hover:stroke-gray-400 transition-all duration-300"
        />
      </div>
      <h3 className="text-4xl font-semibold md:px-xxl pb-lg lg:hidden">
        Edit basic info
      </h3>
      <p className="md:px-xxl pb-lg lg:hidden">
        We care about your data so we’ll always keep it secure.
        <LinkWrapper className="text-xl mx-1 inline">Learn more</LinkWrapper>
      </p>
      <EditProfileForm submitForm={submit} />
      <EditProfileActions className="lg:hidden" submitForm={submitForm} handleClose={handleClose}/>
    </div>
  );
}
