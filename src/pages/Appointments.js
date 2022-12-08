import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import theme from "../components/ui/Theme";
import { fetchAppointments } from "../utils/functions";
import AppointmentsIndex from "./AppointmentsIndex";

export default function Appointments() {
  let { apptId } = useParams();
  const appts = fetchAppointments();

  const [id, setId] = useState(apptId ? apptId : appts[0].id);
  let navigate = useNavigate();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  useEffect(() => {
    lg && navigate("/appointments/" + id);
  }, []);
  useEffect(() => {
    lg && navigate("/appointments/" + id);
  }, [lg]);

  return (
    <>
      <AppointmentsIndex />
      <Outlet />
    </>
  );
}
