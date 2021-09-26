import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";
const DateInput = ({ name, ...rest }) => {
  const [field, meta] = useField(name);

  const configDateInput = {
    ...field,
    ...rest,
    type: "date",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };
  if (meta && meta.touched && meta.error) {
    configDateInput.error = true;
    configDateInput.helperText = meta.error;
  }

  return <TextField {...configDateInput} />;
};

export default DateInput;
