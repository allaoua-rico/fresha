import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import theme from "../components/ui/Theme";
import AddressEditMain from "./AddressEditMain";

export default function AddressDialogFullScreen() {
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(!lg);
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(!lg);
  }, [lg]);

  const handleClose = () => {
    setOpen(false);
    navigate("/profile");
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      aria-describedby="Edit profile"
      keepMounted
    >
      <AddressEditMain handleClose={handleClose} />
    </Dialog>
  );
}
