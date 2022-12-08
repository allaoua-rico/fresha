import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MainWrapper from "../assets/Wrappers/MainWrapper";
import Appointment from "../components/Appointment";
import AppointmentsLists from "../components/AppointmentsLists";
import AppointmentsListsSmallScreen from "../components/AppointmentsListsSmallScreen";
import Header from "../components/Header";
import SmallScreenHeaderWHeadingAndReturn from "../components/SmallScreenHeaderWHeadingAndReturn";
import { fetchAppointments } from "../utils/functions";

export default function AppointmentsIndex() {
  let { apptId } = useParams();
  const [selectedAppt, setSelectedAppt] = useState(apptId);
  const appts = fetchAppointments();
  let location = useLocation();

  useEffect(() => {
    setSelectedAppt(apptId);
  }, [location]);
  
  return (
    <>
      {apptId ? (
        // Large screen
        <>
          <Appointment
            className="lg:hidden bg-secondaryBg h-screen"
            apptId={selectedAppt}
          />
          <div className="hidden lg:flex flex-col w-full h-full bg-secondaryBg">
            <Header />
            <MainWrapper>
              <main className="grid grid-cols-3 gap-x-6 px-xl bg-secondaryBg relative">
                <AppointmentsLists
                  appts={appts}
                  className="col-span-1 sticky top-0 left-0 max-h-full overflow-y-scroll"
                />
                <Appointment
                  apptId={selectedAppt}
                  className="col-span-2 pt-xl pb-[50px] "
                />
              </main>
            </MainWrapper>
          </div>
        </>
      ) : (
        // Small screen
        <div className="flex flex-col w-full h-full bg-secondaryBg">
          <SmallScreenHeaderWHeadingAndReturn
            className="py-md px-lg md:px-xxl"
            headerText="My appointments"
          />
          <main className="bg-secondaryBg relative">
            <AppointmentsListsSmallScreen
              appts={appts}
              className="sticky top-0 left-0 max-h-full overflow-y-scroll"
            />
          </main>
        </div>
      )}
    </>
  );
}
