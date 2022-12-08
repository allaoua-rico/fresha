import { TextField } from "@mui/material";
import React from "react";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";
import * as yup from "yup";
import { useFormik } from "formik";
import BlackButtonWrapper from "../assets/Wrappers/BlackButtonWrapper";
import { useStateValue } from "../state/stateProvider";

export default function LogInForm({ setDisplaySignUp }) {
  const [{ user }, dispatch] = useStateValue();
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch({ type: "SET_USER", user: {} });
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="px-lg ">
      <form onSubmit={formik.handleSubmit}>
        <div className="pb-lg">
          <div className="mb-2 font-semibold">Email address</div>
          <TextField
            fullWidth
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            placeholder="Your email address"
          />
        </div>
        <div className="pb-lg">
          <div className="mb-2 font-semibold">Password</div>
          <TextField
            fullWidth
            name="password"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <button className="pb-lg pt-2">
            <LinkWrapper>Forgot password?</LinkWrapper>
          </button>
        </div>
        <BlackButtonWrapper type="submit">Log in</BlackButtonWrapper>
      </form>
      <div className="mt-lg flex flex-col items-center">
        <div className="text-secondarytextColor text-center">
          Don't have a booker account?
        </div>
        <button onClick={() => setDisplaySignUp()}>
          <LinkWrapper className="text-base">Sign up now</LinkWrapper>
        </button>
      </div>
    </div>
  );
}
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
