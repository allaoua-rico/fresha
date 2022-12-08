import React from "react";
import BlackButtonWrapper from "../assets/Wrappers/BlackButtonWrapper";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";
import WhiteButtonWithIcon from "./WhiteButtonWithIcon";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function AuthIndex({ setDisplayLogin,setDisplaySignUp }) {
  return (
    <>
      <div className="px-lg ">
        <BlackButtonWrapper
          onClick={() => setDisplaySignUp()}
          style={{ marginBottom: 32 }}
        >
          Sign up with email
        </BlackButtonWrapper>
        <WhiteButtonWithIcon
          icon={<FcGoogle className="w-lg h-lg " />}
          className="mb-xl"
        >
          Continue with Google
        </WhiteButtonWithIcon>
        <WhiteButtonWithIcon
          icon={<FaFacebookF className="w-lg h-lg " />}
          className="mb-xl"
        >
          Continue with Facebook
        </WhiteButtonWithIcon>
      </div>
      <div className="mt-lg flex flex-col items-center">
        <div className="text-secondarytextColor text-center">
          Already have an account?
        </div>
        <button onClick={() => setDisplayLogin()}>
          <LinkWrapper className="text-base">Log in now</LinkWrapper>
        </button>
      </div>
    </>
  );
}
