import React from "react";
import IsConfirmedButtonWrapper from "../assets/Wrappers/IsConfirmedGrayButtonWrapper";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../state/stateProvider";

export default function CancelButton({ className, onClick }) {
  const navigate = useNavigate();
  const { apptId } = useParams();

  // console.log(apptId)
  return (
    <div
      onClick={() => {
        onClick();
        navigate(`/appointments/${apptId}/cancel`);
      }}
      className={className}
    >
      <IsConfirmedButtonWrapper>
        <MdOutlineCancel className="w-7 h-7" />
        <div>Cancel</div>
      </IsConfirmedButtonWrapper>
    </div>
  );
}
