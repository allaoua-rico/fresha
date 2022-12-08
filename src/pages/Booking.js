import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import BookingStickyCol from "../assets/Wrappers/BookingStickyCol";
import MainWrapper from "../assets/Wrappers/MainWrapper";
import PageWrapper from "../assets/Wrappers/PageWrapper";
import BookingHeader from "../components/BookingHeader";
import BookingInfo from "../components/BookingInfo";
import FixedFooter from "../components/FixedFooter";
import { useStateValue } from "../state/stateProvider";
import { resolveEmploye } from "../utils/functions";
import { useResizeDetector } from "react-resize-detector";

export default function Booking() {
  const [{ booking }, dispatch] = useStateValue();
  let [searchParams] = useSearchParams();

  const { height: bookingHeaderHeight, ref: bookingHeaderRef } =
    useResizeDetector();
  const { height: fixedFooteHeight, ref: fixedFooterRef } = useResizeDetector();

  const [displayServices, setDisplayServices] = useState(false);
  const [displayCheckout, setDisplayCheckout] = useState(false);
  const [step, setStep] = useState(1);
  const [stepLabel, setStepLabel] = useState("Services");

  const employe = resolveEmploye(searchParams.get("employe"));
  let location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/booking/staff" ||
      !!searchParams.get("bookWithStaff")
    ) {
      // Staff Step
      setStepLabel("Staff");
      setStep(!!searchParams.get("bookWithStaff") === true ? 1 : 2);
      setDisplayServices(false);
      // !!searchParams.get("bookWithStaff") && setDisplayStaff(true);
    } else if (location.pathname === "/booking") {
      // Services Step
      // Reinitialize the booking state, then dispatch with query params
      dispatch({
        type: "SET_BOOKING",
        booking: { employe: {}, services: [] },
      });
      dispatchBookingState(searchParams, dispatch, employe);
      setStepLabel("Services");
      setStep(booking?.employe?.id ? 2 : 1);
      setDisplayServices(true);
    } else if (location.pathname === "/booking/time") {
      // Time step
      setStepLabel("Time");
      setStep(3);
      setDisplayServices(false);
    } else if (location.pathname === "/booking/checkout") {
      // Checkout step
      setStep(4);
      setStepLabel("Checkout");
      setDisplayCheckout(true);
    } else if (location.pathname === "/booking/auth") {
      // Auth step
      setStep(4);
      setStepLabel("Sign up to continue");
      setDisplayCheckout(false);
    }
  }, [location]);
  // console.log(bookingHeaderHeight)
  const isServicesStateValid = booking?.services?.length ? true : false;
  return (
    <PageWrapper bgColor="bg-secondaryBg">
      <BookingHeader ref={bookingHeaderRef} step={step} stepLabel={stepLabel} />
      <div
      // when scrollin there is a delay before the div change top position
      //  , so i substracted 16 to get it upper
        style={{ top: (bookingHeaderHeight-16) }}
        className="fixed hidden lg:flex w-full h-12 min-h-12 bg-mainPrimary "
      ></div>

      <MainWrapper maxWidth="max-w-screen-lg">
        <main
          style={{
            marginTop: bookingHeaderHeight,
            marginBottom: fixedFooteHeight,
          }}
          className="w-full lg:grid lg:grid-cols-8 gap-4 lg:px-10 "
        >
          <div className="col-span-5 bg-transparent ">
            {/* Display the link to change the staff only on the services component And on the checkout component
            if the employe is selected */}
            {booking.employe?.id?.toString() &&
              (location.pathname == "/booking/checkout" ||
                location.pathname == "/booking") && (
                <div className="lg:hidden">
                  <BookingInfo />
                </div>
              )}
            <BookingStickyCol>
              {stepLabel !== "Staff" &&
                stepLabel !== "Time" &&
                stepLabel !== "Checkout" &&
                stepLabel !== "Sign up to continue" && (
                  <div className="bg-white z-[1010] text-black px-6 py-4 mb-5 rounded-lg shadow-md text-xl font-medium ">
                    {stepLabel}
                  </div>
                )}
            </BookingStickyCol>
            {/* Component displaying  */}
            <div className="bg-white text-black z-[900] rounded-lg shadow-md">
              <Outlet context={[bookingHeaderHeight]}/>
            </div>
          </div>
          <div className="col-span-3 w-fit hidden lg:block relative z-[1010]">
            <BookingStickyCol>
              <BookingInfo />
            </BookingStickyCol>
          </div>
        </main>
      </MainWrapper>
      <FixedFooter
        ref={fixedFooterRef}
        setDisplayServices={() => setDisplayServices(false)}
        landingpage={false}
        translate={
          // in the services step
          location.pathname === "/booking"
            ? isServicesStateValid && displayServices
              ? false
              : true
            : location.pathname === "/booking/checkout" &&
              //in the checkout step
              displayCheckout
            ? false
            : true
        }
      />
    </PageWrapper>
  );
}

const dispatchBookingState = (searchParams, dispatch, employe) => {
  if (searchParams.get("employe")) {
    dispatch({
      type: "SET_BOOKING_EMPLOYE",
      employe: employe,
    });
    // dispatch({
    //   type: "SET_BOOKING_ISEMPLOYEFIRST",
    //   isEmployeFirst: true,
    // });
    dispatch({
      type: "SET_BOOKING_BOOKWITHSTAFF",
      bookWithStaff: true,
    });
  } else if (searchParams.get("service") || searchParams.get("option")) {
    dispatch({
      type: "SET_BOOKING_SERVICES",
      services: [
        {
          id: parseInt(searchParams.get("service")),
          opt: parseInt(searchParams.get("option")),
        },
      ],
    });
  } else {
    dispatch({
      type: "SET_BOOKING",
      booking: { employe: {}, services: [] },
    });
  }
};
// useEffect(() => {
//   const resizeObserver = new ResizeObserver((event) => {
//     setPageHeight(event[0].contentBoxSize[0].blockSize);
//   });
//   if (ref) {
//     resizeObserver.observe(ref.current);
//   }
// }, [ref]);
