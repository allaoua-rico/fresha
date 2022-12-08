import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useMediaQuery } from "@mui/material";
import theme from "../components/ui/Theme";
import BlackButtonWrapper from "../assets/Wrappers/BlackButtonWrapper";
import { xxlSpacing, smSpacing } from "../components/ui/ThemeVars";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";
import TextArea from "../assets/Wrappers/TextArea";

export default function Notes() {
  let navigate = useNavigate();
  const [{ booking }, dispatch] = useStateValue();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const [open, setOpen] = useState(true);
  const [notes, setNotes] = useState(booking.notes);

  const handleClickOpen = () => {
    setNotes(booking.notes);
    setOpen(true);
  };
  const handleSaveAndClose = () => {
    dispatch({
      type: "SET_BOOKING_NOTES",
      notes,
    });
    setNotes("");
    navigate("/booking/checkout");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const closeWithoutSaving = () => {
    console.log("here");
    setNotes("");
    handleClose();
    navigate("/booking/checkout");
  };
  useEffect(() => {
    handleClickOpen();
  }, []);

  return (
    <div>
      <BootstrapDialog
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 0 }}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <div className="px-xxl">
            <button className="mr-4 py-4" onClick={() => closeWithoutSaving()}>
              <BsArrowLeft className="w-6 h-6" />
            </button>
            <div className="text-2xl font-semibold mb-4">Add booking notes</div>
          </div>
        </DialogTitle>
        <DialogContent sx={{ border: 0 }} dividers>
          <div className="px-xxl text-lg">
            <div>Include comments or requests about your booking</div>
            <TextArea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <BlackButtonWrapper
            style={{
              marginRight: xxlSpacing,
              marginLeft: xxlSpacing,
              marginTop: smSpacing,
              marginBottom: smSpacing,
            }}
            autoFocus
            onClick={handleSaveAndClose}
          >
            Done
          </BlackButtonWrapper>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: 0,
  },
  "& .MuiDialogActions-root": {
    padding: 0,
  },
}));
