import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";
import ServicesOption from "./ServicesOption";
import { useLocation } from "react-router-dom";

export default function ServiceAccordion({ openHandler, service }) {
  const [{ booking }, dispatch] = useStateValue();
  let location = useLocation();
  const landingPage = location.pathname === "/";
  const bgColor = landingPage ? "#f2f2f7" : "#f8f8fb";

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(openHandler ? "panel1" : false);
  }, [openHandler]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="w-full">
      <MuiAccordion
        disableGutters
        elevation={0}
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backgroundColor: expanded ? bgColor : "white",
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            display: "none",
          },
          border: "0px",
          px: "16px",
        }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" />
        <AccordionDetails>
          <Typography>
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
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
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

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => {
    return {
      backgroundColor: "transparent",
      flexDirection: "row",
      minHeight: 0,
      "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(180deg)",
      },
      "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
      },
    };
  }
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));
