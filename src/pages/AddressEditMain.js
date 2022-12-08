import React, { useState } from "react";
import AddressEditName from "../components/AddressEditName";
import CloseButtonAbsolute from "../components/CloseButtonAbsolute";
import EditAddressForm from "../components/EditAddressForm";
import EditProfileActions from "../components/EditProfileActions";
import { useStateValue } from "../state/stateProvider";

export default function AddressEditMain({ handleClose }) {
  const [submit, setSubmit] = useState(false);

  const [{ user }, dispatch] = useStateValue();
  function submitForm() {
    setSubmit(!submit);
  }
  function getName(e) {
    // console.log(e);
  }

  return (
    <div className="bg-white w-full h-full relative md:rounded-xl px-md md:px-xl pb-xl">
      <div className="bg-white sticky-top h-14 lg:hidden">
        <CloseButtonAbsolute
          to={`/profile`}
          onClick={handleClose}
          className="top-md right-md group flex"
          iconClassName="w-7 h-7 group-hover:stroke-gray-400 transition-all duration-300"
        />
      </div>
      <h3 className="text-3xl font-bold md:px-xl pb-lg lg:hidden">
        Edit address
      </h3>
      <AddressEditName
        className={"mb-5 px-md md:px-xl"}
        name={user.addresses.name}
        getName={getName}
      />

      <EditAddressForm className="px-md md:px-xl" submitForm={submit} />
      <EditProfileActions
        className="lg:hidden"
        submitForm={submitForm}
        handleClose={handleClose}
      />
    </div>
  );
}
