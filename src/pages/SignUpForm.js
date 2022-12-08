import { Checkbox, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import BlackButtonWrapper from "../assets/Wrappers/BlackButtonWrapper";
import MuiPhoneNumber from "material-ui-phone-number";
import LinkWrapper from "../assets/Wrappers/LinkWrapper";
import * as yup from "yup";
import { useFormik } from "formik";
import { checkboxClass } from "../components/ui/ThemeVars";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SignUpForm({ className, setDisplayLogin }) {
  const formik = useFormik({
    initialValues: {
      email: "email@email.com",
      password: "123456789",
      mobile: "",
      policies: false,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="px-lg ">
      <form
        onChange={(event) => {
          console.log(event.target.name);
          console.log(event.target.value);
        }}
        onSubmit={formik.handleSubmit}
      >
        <div className="pb-lg">
          <div className="mb-2 font-semibold">First name (optional)</div>
          <TextField
            fullWidth
            name="firstName"
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            placeholder="Your first name"
          />
        </div>
        <div className="pb-lg">
          <div className="mb-2 font-semibold">Last name (optional)</div>
          <TextField
            fullWidth
            name="lastName"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            placeholder="Your last name"
          />
        </div>
        <div className="pb-lg">
          <div className="mb-2 font-semibold">Mobile number (optional)</div>
          <MuiPhoneNumber
            fullWidth
            autoFocus={false}
            variant="outlined"
            defaultCountry={"sa"}
            name="mobile"
            id="mobile"
            value={formik.values.mobile}
            onChange={(v) => formik.setFieldValue("mobile", v)}
            // error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            // helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </div>
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
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            placeholder="Create a password"
            type={values.showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div
          onClick={() =>
            formik.setFieldValue("policies", !formik.values.policies)
          }
          className="pb-lg"
        >
          <div className=" flex items-center">
            <input
              type="checkbox"
              className={checkboxClass + "  hover:cursor-default"}
              inputProps={{ "aria-label": "policies agreement" }}
              name="policies"
              id="policies"
              checked={formik.values.policies}
            />
            <p className="pl-4 text-thirdtextColor flex">
              I agree to the
              <LinkWrapper className="text-base ml-1">
                Privacy Policy
              </LinkWrapper>{" "}
              ,
              <LinkWrapper className="text-base mx-1">Terms of Use</LinkWrapper>{" "}
              and
              <LinkWrapper className="text-base ml-1">
                Terms of Service
              </LinkWrapper>
            </p>
          </div>
          <div className="text-red-500 ml-10 mt-2">
            {formik.touched.policies && formik.errors.policies}
          </div>
        </div>
        <div
          onClick={() => formik.setFieldValue("notifs", !formik.values.notifs)}
          className="pb-lg"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              className={checkboxClass + "  hover:cursor-default"}
              name="notifs"
              id="notifs"
              checked={formik.values.notifs}
            />
            <div className="pl-4 text-thirdtextColor">
              I agree to receive marketing notifications with offers and news
            </div>
          </div>
        </div>
        <BlackButtonWrapper type="submit">Sign up</BlackButtonWrapper>
      </form>
      <div className="mt-lg flex flex-col items-center">
        <div className="text-secondarytextColor text-center">
          Already have a booker account?
        </div>
        <button onClick={() => setDisplayLogin()}>
          <LinkWrapper className="text-base">Sign in now</LinkWrapper>
        </button>
      </div>
    </div>
  );
}
const validationSchema = yup.object({
  firstName: yup.string("Enter your first name"),
  lastName: yup.string("Enter your last name"),
  mobile: yup.string("Enter your phone number"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  policies: yup
    .boolean()
    .oneOf([true], "You have to accept the terms to sign up.")
    .required("You have to accept the terms to sign up."),
  notifs: yup.boolean(),
});
