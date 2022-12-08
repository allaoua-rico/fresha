import React, { useEffect, useState } from "react";
import { useStateValue } from "../state/stateProvider";
import { MenuItem, Select, TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import * as yup from "yup";
import { useFormik } from "formik";
import { monthNames } from "../utils/TimeFunctions";

export default function EditAddressForm({ submitForm, className }) {
  const [{ user }, dispatch] = useStateValue();
  const {
    name,
    shortAddress,
    buildingNo,
    streetAddress,
    secondaryNo,
    district,
    zipCode,
    city,
    country,
  } = user.addresses;
  const [submitFormAcc, setSubmitFormAcc] = useState(0);
  const formik = useFormik({
    initialValues: {
      name,
      shortAddress,
      buildingNo,
      streetAddress,
      secondaryNo,
      district,
      zipCode,
      city,
      country,
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
      onSubmit={formik.handleSubmit}
      className={className}
    >
      <div className="pb-lg">
        <div className="mb-2 font-semibold">Short Address (optional)</div>
        <TextField
          fullWidth
          name="shortAddress"
          id="shortAddress"
          value={formik.values.shortAddress}
          onChange={formik.handleChange}
          error={
            formik.touched.shortAddress && Boolean(formik.errors.shortAddress)
          }
          helperText={formik.touched.shortAddress && formik.errors.shortAddress}
        />
      </div>
      <div className="pb-lg">
        <div className="mb-2 font-semibold">Building No. (optional)</div>
        <TextField
          fullWidth
          name="buildingNo"
          id="buildingNo"
          InputProps={{ type: "number" }}
          value={formik.values.buildingNo}
          onChange={formik.handleChange}
          error={formik.touched.buildingNo && Boolean(formik.errors.buildingNo)}
          helperText={formik.touched.buildingNo && formik.errors.buildingNo}
        />
      </div>
      <div className="pb-lg">
        <div className="mb-2 font-semibold">Street Address (optional)</div>
        <TextField
          fullWidth
          autoFocus={false}
          variant="outlined"
          name="streetAddress"
          id="streetAddress"
          value={formik.values.streetAddress}
          onChange={(v) => formik.setFieldValue("streetAddress", v)}
          error={
            formik.touched.streetAddress && Boolean(formik.errors.streetAddress)
          }
          helperText={
            formik.touched.streetAddress && formik.errors.streetAddress
          }
        />
      </div>
      <div className="pb-lg">
        <div className="mb-2 font-semibold">Secondary No (optional)</div>
        <TextField
          fullWidth
          name="secondaryNo"
          id="secondaryNo"
          InputProps={{ type: "number" }}
          value={formik.values.secondaryNo}
          onChange={formik.handleChange}
          error={
            formik.touched.secondaryNo && Boolean(formik.errors.secondaryNo)
          }
          helperText={formik.touched.secondaryNo && formik.errors.secondaryNo}
        />
      </div>
      <div className="pb-lg ">
        <div className="mb-2 font-semibold">District (optional)</div>
        <TextField
          fullWidth
          name="district"
          id="district"
          value={formik.values.district}
          onChange={formik.handleChange}
          error={formik.touched.district && Boolean(formik.errors.district)}
          helperText={formik.touched.district && formik.errors.district}
        />
      </div>
      <div className="pb-lg ">
        <div className="mb-2 font-semibold">ZIP Code (optional)</div>
        <TextField
          fullWidth
          name="zipCode"
          id="zipCode"
          InputProps={{ type: "number" }}
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
          helperText={formik.touched.zipCode && formik.errors.zipCode}
        />
      </div>
      <div className="pb-lg">
        <div className="mb-2 font-semibold">City (optional)</div>
        <TextField
          fullWidth
          name="city"
          id="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
      </div>
      <div className="pb-lg">
        <div className="mb-2 font-semibold">Country (optional)</div>
        <TextField
          fullWidth
          name="country"
          id="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />
      </div>
    </form>
  );
}
const validationSchema = yup.object({
  // name,
  // shortAddress,
  // buildingNo,
  // streetAddress,
  // secondaryNo,
  // district,
  // zipCode,
  // city,
  // country,
  // firstName: yup.string(""),
  // lastName: yup.string("Enter your last name"),
  // mobile: yup.string("Enter your phone number"),
  // email: yup.string("Enter your email"),
  // birthDayDay: yup.number().max(31),
});
