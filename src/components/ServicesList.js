import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";
import HorGrayLine from "./HorGrayLine";
import ServiceCard from "./ServiceCard";
import db from "../db.json";

export default function ServicesList() {
  let location = useLocation();
  const [{ booking }, dispatch] = useStateValue();
  const { services } = db;
  const landingPage = location.pathname === "/";

  const [md, setMd] = useState(window.innerWidth >= 768);

  window.onresize = reportWindowSize;
  function reportWindowSize() {
    const mdOrgtr = window.innerWidth >= 768;
    setMd(mdOrgtr);
  }
  return (
    <div >
      {services.map((service, index) => (
        <div key={service.id + index}>
          <ServiceCard
            selected={
              !landingPage
                ? isServiceInState(booking?.services, service.id)
                : false
            }
            service={service}
            md={md}
          />
          {index < services.length - 1 && (
            <div className="w-full -my-3">
              <HorGrayLine />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const isServiceInState = (servicesArray, id) => {
  if (!Array.isArray(servicesArray)) return false;
  const index = servicesArray.findIndex((service) => service.id === id);
  if (index >= 0) return true;
  return false;
};
