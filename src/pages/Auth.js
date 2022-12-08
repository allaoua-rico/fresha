import React, { useEffect, useState } from "react";
import SignUpForm from "./SignUpForm";
import AuthIndex from "../components/AuthIndex";
import LogInForm from "./LogInForm";
import { useStateValue } from "../state/stateProvider";
import { useLocation, useNavigate } from "react-router-dom";

export default function Auth({ className }) {
  const [{ user }] = useStateValue();

  const [displayIndex, setDisplayIndex] = useState(true);
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displaySignUp, setDaisplaySignUp] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === "/booking/auth" &&
      user &&
      navigate("/booking/checkout");
  }, [location, user]);
  return (
    <div
      className={
        className
          ? className
          : "py-lg sticky-top z-[900] bg-white rounded-lg shadow-md"
      }
    >
      {displayIndex && (
        <AuthIndex
          setDisplayLogin={() => {
            setDisplayIndex(false);
            setDisplayLogin(true);
            setDaisplaySignUp(false);
          }}
          setDisplaySignUp={() => {
            setDisplayIndex(false);
            setDisplayLogin(false);
            setDaisplaySignUp(true);
          }}
        />
      )}
      {displayLogin && (
        <LogInForm
          setDisplaySignUp={() => {
            setDisplayIndex(false);
            setDisplayLogin(false);
            setDaisplaySignUp(true);
          }}
        />
      )}
      {displaySignUp && (
        <SignUpForm
          setDisplayLogin={() => {
            setDisplayIndex(false);
            setDisplayLogin(true);
            setDaisplaySignUp(false);
          }}
        />
      )}
    </div>
  );
}
