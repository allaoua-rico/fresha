import React from "react";
import AddressDialog from "./AddressDialog";
import AddressDialogFullScreen from "./AddressDialogFullScreen";

export default function Address() {
  return (
    <>
      <div className="flex md:hidden w-full justify-center items-center bg-secondaryBg ">
        <AddressDialogFullScreen />
      </div>
      <div className="md:flex hidden relative ">
        <AddressDialog />
      </div>
    </>
  );
}
