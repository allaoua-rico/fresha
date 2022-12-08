import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import theme from "../components/ui/Theme";
import EditProfileActions from "../components/EditProfileActions";
import CloseButtonAbsolute from "../components/CloseButtonAbsolute";
import { useStateValue } from "../state/stateProvider";
import AddressEditName from "../components/AddressEditName";
import EditAddressForm from "../components/EditAddressForm";

export default function AddressDialog() {
  const [{ user }, dispatch] = useStateValue();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(lg);
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);

  function submitForm() {
    setSubmit(!submit);
  }

  useEffect(() => {
    setOpen(lg);
  }, [lg]);

  const handleClose = () => {
    setOpen(false);
    navigate("/profile");
  };

  function submitForm() {
    setSubmit(!submit);
  }
  function getName(e) {
    // console.log(e);
  }
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      onBackdropClick={handleClose}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      //   aria-describedby="cancel-appointment-slide-description"
    >
      <DialogTitle sx={{ m: 0, p: 0 }}>
        <div className="border-b w-full md:px-lg py-md">
          <CloseButtonAbsolute
            onClick={handleClose}
            to={"/profile"}
            className="top-md right-md group flex"
            iconClassName="w-9 h-9 group-hover:stroke-gray-400 transition-all duration-300"
          />
          <h3 className="text-xl font-bold">Edit address</h3>
        </div>
      </DialogTitle>
      <DialogContent>
        <AddressEditName
          className={"mt-5 px-md md:px-xl"}
          name={user.addresses.name}
          getName={getName}
        />
        <EditAddressForm className="px-md md:px-xl" submitForm={submit} />
      </DialogContent>
      <DialogActions sx={{ m: 0, p: 0 }}>
        <EditProfileActions
          className="w-full"
          submitForm={submitForm}
          handleClose={handleClose}
        />
      </DialogActions>
    </Dialog>
  );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
