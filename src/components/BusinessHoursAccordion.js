import * as React from "react";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdOutlineWatchLater } from "react-icons/md";

// let updateOutside = false;

export default function BusinessHoursAccordion({ locationSection }) {
  const [expanded, setExpanded] = React.useState(false);

  //   const [width, setWidth] = React.useState(window.innerWidth);
  //   window.addEventListener("resize", function () {
  //     window.matchMedia("(min-width: 400px)").matches
  //       ? setWidth(true)
  //       : setWidth(false);
  //   });

  //   React.useEffect(() => {
  //     /* Assign update to outside variable */
  //     updateOutside = expanded;
  //     console.log("expanded", expanded);
  //     /* Unassign when component unmounts */
  //     return () => (updateOutside = null);
  //   });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <MuiAccordion
        disableGutters
        elevation={0}
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backgroundColor: locationSection
            ? "white"
            : expanded
            ? "#f2f2f7"
            : "white",
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            display: "none",
          },
          border: "0px",
          pt: "16px",
          px: "16px",
          // pb: "16px",
        }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="flex items-center">
            <MdOutlineWatchLater className="w-6 h-6 mr-3" />
            <Typography>11:00am - 10:00pm</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="hidden sm:flex flex-col">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((el, index) => (
                <li key={el + index} className="flex justify-between">
                  <div>{el}</div>
                  <div>11:00am - 10:00pm</div>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col sm:hidden">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (el, i) => (
                  <li key={i + el} className="flex justify-between">
                    <div>{el}</div>
                    <div>11:00am - 10:00pm</div>
                  </li>
                )
              )}
            </ul>
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
    </div>
  );
}

// if (updateOutside) updateOutside(/* will re-render App */);

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />}
    {...props}
  />
))(({ theme }) => {
  //   console.log(",", updateOutside);
  return {
    backgroundColor: "transparent",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(180deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  };
});

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));
