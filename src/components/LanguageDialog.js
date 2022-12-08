import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import LanguageSelect from "./LanguageSelect";
import BlackButtonWrapper from "../assets/Wrappers/BlackButtonWrapper";
import WhiteButtonWrapper from "../assets/Wrappers/WhiteButtonWrapper";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ outOpen, outHandleClose ,className}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    outHandleClose();
    setOpen(false);
  };

  useEffect(() => {
    outOpen && setOpen(true);
  }, [outOpen]);

  return (
    <div className={className}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        sx={{ "& .MuiDialog-paper": { paddingY: "40px",paddingX: "24px" } }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <div className="text-3xl font-bold">Change Language</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Set your language and location for the best Fresha experience{" "}
            <div className="text-black font-semibold mt-8 mb-4">Language</div>
            <LanguageSelect />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <WhiteButtonWrapper onClick={handleClose}>Close</WhiteButtonWrapper>
          <BlackButtonWrapper>Save</BlackButtonWrapper>
        </DialogActions>
      </Dialog>
    </div>
  );
}
