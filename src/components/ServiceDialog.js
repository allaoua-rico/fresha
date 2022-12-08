import React, { forwardRef, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import HorGrayLine from "./HorGrayLine";
import { Link, useLocation } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";
import ServicesOption from "./ServicesOption";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ServiceDialog({ openHandler, closeHandler, service }) {
  const [{ booking }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);

  let location = useLocation();
  const landingPage = location.pathname === "/";

  const handleClose = (event) => {
    setOpen(false);
    closeHandler("true");
    event.stopPropagation();
  };
  useEffect(() => {
    openHandler && setOpen(true);
  }, [openHandler]);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <h4 className="text-xl font-semibold">
            {service.title}
            <span className="text-lg font-semibold">{service.title2}</span>
          </h4>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p className="mt-2 mb-8 text-sm text-black">
              Kindly choose one of the below:
              {service?.options.map((opt, index) => (
                <span key={opt.title + index}>-{opt.title}</span>
              ))}
            </p>
            {service?.options.map((opt, index) =>
              landingPage ? (
                <Link
                  to={`/booking?service=${service.id}&option=${opt.id}`}
                  key={opt.title + opt.duration}
                >
                  <ServicesOption service={service} opt={opt} index={index} />
                </Link>
              ) : (
                <button
                  key={opt.title + opt.duration}
                  onClick={() =>
                    dispatch({
                      type: "ADD_REMOVE_SERVICE",
                      service: { id: service.id, opt: opt.id },
                    })
                  }
                  className="w-full text-left "
                >
                  <ServicesOption
                    selected={
                      booking
                        ? isOptionInState(booking.services, service.id, opt.id)
                        : false
                    }
                    service={service}
                    opt={opt}
                    index={index}
                  />
                </button>
              )
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          disableSpacing={true}
          style={{ justifyContent: "center", paddingY: 4 }}
        >
          <div className="flex flex-col w-full mr-6">
            <HorGrayLine />
            <button
              onClick={handleClose}
              className="text-lg font-semibold mb-4"
            >
              Close
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const isOptionInState = (servicesArray, id, opt) => {
  if (!Array.isArray(servicesArray)) return false;
  const index = servicesArray.findIndex((service) => service.id === id);
  if (index < 0) return false;
  const sameOpt = servicesArray[index].opt === opt;
  return sameOpt;
};
