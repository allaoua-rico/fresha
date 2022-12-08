import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CancelActions({ appt, className }) {
  const { apptId } = useParams();
  const navigate = useNavigate();

  function handleCancel() {
    navigate(`/appointments/${apptId}`);
  }
  return (
    <div className={className}>
      <Link
        to={`/appointments/${apptId}`}
        className="w-full text-center border text-lg font-semibold shadow-md py-sm px-md rounded-md mr-4 hover:border-black duration-500 transition-all"
      >
        Close
      </Link>
      <button
        onClick={() => handleCancel()}
        className="w-full border text-white bg-red-600 text-lg font-semibold py-sm px-md rounded-md duration-400 transition-all hover:bg-red-400"
      >
        Cancel
      </button>
    </div>
  );
}
