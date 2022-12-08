import React from "react";
import { useStateValue } from "../state/stateProvider";
import ServicesList from "./ServicesList";

export default function BookingServices() {
  const [{ user, booking }, dispatch] = useStateValue();

  return (
    <>
      <ServicesList />
    </>
  );
}
