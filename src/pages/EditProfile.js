import React from "react";
import EditProfileDialog from "./EditProfileDialog";
import EditProfileDialogFullScreen from "./EditProfileDialogFullScreen";

export default function EditProfile() {
  return (
    <>
      <div className="flex md:hidden w-full justify-center items-center bg-secondaryBg ">
        <EditProfileDialogFullScreen />
      </div>
      <div className="md:flex hidden relative ">
        <EditProfileDialog />
      </div>
    </>
  );
}
