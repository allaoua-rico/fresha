import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TextArea from "../assets/Wrappers/TextArea";
import BookingInfoAddNotes from "../components/BookingInfoAddNotes";
import HorGrayLine from "../components/HorGrayLine";
import PayAtStore from "../components/PayAtStore";
import { useStateValue } from "../state/stateProvider";

export default function Checkout() {
  const [{ booking, user }, dispatch] = useStateValue();
  const [notes, setNotes] = useState(booking.notes);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({
      type: "SET_BOOKING_NOTES",
      notes,
    });
  }, [notes]);
  useEffect(() => {
    booking?.services?.length == 0 || !booking?.employe.id?.toString()
      ? navigate("/booking")
      : !user && navigate("/booking/auth");
  }, []);
  console.log(user);
  return (
    <>
      <div className="lg:hidden z-50 h-full sticky top-[72px] bg-white rounded-md">
        <PayAtStore />
        <HorGrayLine style={{ marginTop: 0, marginBottom: 0 }} />
        <BookingInfoAddNotes />
      </div>
      <div className="hidden lg:flex flex-col z-50 sticky top-[72px] bg-white rounded-md px-10 lg:py-10 ">
        <div className="flex flex-col mb-4">
          <div className="text-xl font-semibold mb-1">Add booking notes</div>
          <div>Include comments or requests about your booking</div>
        </div>
        <TextArea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
    </>
  );
}
