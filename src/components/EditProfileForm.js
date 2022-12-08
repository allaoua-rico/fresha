import React, { useEffect, useState } from "react";
import { useStateValue } from "../state/stateProvider";
import { MenuItem, Select, TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import * as yup from "yup";
import { useFormik } from "formik";
import { monthNames } from "../utils/TimeFunctions";

export default function EditProfileForm({ submitForm, className }) {
  const [{ user }, dispatch] = useStateValue();
  const { firstName, lastName, mobile, email, birthDay, gender } = user;
  const [submitFormAcc, setSubmitFormAcc] = useState(0);
  const formik = useFormik({
    initialValues: {
      firstName,
      lastName,
      mobile,
      email,
      birthDayDay: birthDay.day,
      birthDayMonth: birthDay.month,
      birthDayYear: birthDay.year,
      gender,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    submitFormAcc !== 0 && formik.submitForm();
    setSubmitFormAcc(submitFormAcc + 1);
  }, [submitForm]);

  return (
    <form
      onChange={(event) => {
        console.log(event.target.name);
        console.log(event.target.value);
      }}
      onSubmit={formik.handleSubmit}
      className={className}
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
      <div className="pb-lg ">
        <div className="mb-2 font-semibold">Date of birth</div>
        <div className="grid grid-cols-3 gap-x-md">
          <TextField
            fullWidth
            name="birthDayDay"
            id="birthDayDay"
            InputProps={{ type: "number" }}
            value={formik.values.birthDayDay}
            onChange={formik.handleChange}
            error={
              formik.touched.birthDayDay && Boolean(formik.errors.birthDayDay)
            }
            helperText={formik.touched.birthDayDay && formik.errors.birthDayDay}
            placeholder="BirthDay Day"
          />
          <Select
            fullWidth
            name="birthDayMonth"
            id="birthDayMonth"
            value={formik.values.birthDayMonth}
            onChange={formik.handleChange}
            error={
              formik.touched.birthDayMonth &&
              Boolean(formik.errors.birthDayMonth)
            }
            helperText={
              formik.touched.birthDayMonth && formik.errors.birthDayMonth
            }
            placeholder="BirthDay Month"
          >
            {monthNames.map((month) => (
              <MenuItem value={month}>{month}</MenuItem>
            ))}
          </Select>
          <TextField
            fullWidth
            name="birthDayYear"
            id="birthDayYear"
            InputProps={{ type: "number" }}
            value={formik.values.birthDayYear}
            onChange={formik.handleChange}
            error={
              formik.touched.birthDayYear && Boolean(formik.errors.birthDayYear)
            }
            helperText={
              formik.touched.birthDayYear && formik.errors.birthDayYear
            }
            placeholder="BirthDay Year"
          />
        </div>
      </div>
      <div className="pb-lg">
        <div className="mb-2 font-semibold">Gender</div>
        <Select
          fullWidth
          name="gender"
          id="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}
          placeholder="Your gender"
        >
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"non-pinary"}>non-pinary</MenuItem>
          <MenuItem value={"Prefer not to say"}>Prefer not to say</MenuItem>
        </Select>
      </div>
    </form>
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
  birthDayDay: yup.number().max(31),
});
