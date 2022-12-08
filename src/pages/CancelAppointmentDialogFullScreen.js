import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppointmentCancelMain from "../components/AppointmentCancelMain";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import theme from "../components/ui/Theme";
import { secondaryBg } from "../components/ui/ThemeVars";

export default function CancelAppointmentDialogFullScreen() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { apptId } = useParams();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    !md && setOpen(false);
    md && handleClickOpen();
  }, [md]);

  const handleClose = () => {
    setOpen(false);
    navigate(`/appointments/${apptId}`);
  };

  return (
    <Dialog
      onBackdropClick={(e) => {
        e.prevenDefault();
      }}
      hideBackdrop
      sx={{
        bgcolor: secondaryBg,
        "& .MuiPaper-root": { boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
      }}
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="cancel-appointment-slide-description"
    >
      <AppointmentCancelMain />
    </Dialog>
  );
}
