import React from "react";
import LiButtonWrapper from "../assets/Wrappers/LiButtonWrapper";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function BookingInfoAddNotes() {
  return (
    <Link to="/booking/notes">
      <LiButtonWrapper>
        <div className="border border-gray-300 p-3 mr-6 rounded-xl bg-blue-100">
          <IoDocumentTextOutline className="w-7 h-7 stroke-blue-600" />
        </div>
        <div className="text-blue-400 text-lg">Add booking notes</div>
      </LiButtonWrapper>
    </Link>
  );
}
