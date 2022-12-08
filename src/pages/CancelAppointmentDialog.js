import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import AppointmentCancelMain from "../components/AppointmentCancelMain";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import theme from "../components/ui/Theme";

export default function CancelAppointmentDialog() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { apptId } = useParams();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    md && setOpen(false);
    !md && handleClickOpen();
  }, [md]);

  const handleClose = () => {
    setOpen(false);
    navigate(`/appointments/${apptId}`);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xl"
      sx={{
        width: "100%",
        "& .MuiPaper-root": {
          bgcolor: "transparent",
          borderRadius: "40px 40px 0px 0px",
          border: 0,
          m: 0,
          width: "100%",
          position: "absolute",
          bottom: 0,
        },
      }}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="cancel-appointment-slide-description"
    >
      <AppointmentCancelMain />
    </Dialog>
  );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
