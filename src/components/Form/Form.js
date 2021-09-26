import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./FormUI/Textfield";
import DateInput from "./FormUI/DateInput";
import { phoneRegExp } from "./data/Regex";
import countries from "./data/countries.json";
import SelectInput from "./FormUI/SelectInput";
import CheckboxInput from "./FormUI/CheckboxInput";
import ButtonInput from "./FormUI/ButtonInput";
import { useDispatch, useSelector } from "react-redux";
import { itemsSelectors, itemsOperations } from "../../store/items";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  birthday: "",
  email: "",
  phone: "",
  adress: "",
  city: "",
  country: "",
  message: "",
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  birthday: Yup.date().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Please enter a valid phone number")
    .required("Required"),
  adress: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

const FormCheckout = () => {
  const classes = useStyles();
  const order = useSelector(itemsSelectors.cardItems());
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log("User Informaion");
                console.log(values);
                console.log("Order Informaion");
                console.log(order);
                setTimeout(() => {
                  history.push("./home");
                  dispatch(itemsOperations.clearCard());
                }, 3000);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Personal Information</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextInput name="firstName" label="First Name" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextInput name="lastName" label="Last Name" />
                  </Grid>
                  <Grid item xs={4}>
                    <DateInput name="birthday" label="Birthday date" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput name="phone" label="Phone number" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Delivery Adress</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput name="adress" label="Adress" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput name="city" label="City" />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectInput
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      name="message"
                      label="Optional comments to order"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CheckboxInput
                      name="termsOfService"
                      legend="Terms of Service"
                      label="Agree"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <ButtonInput>Checkout</ButtonInput>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default FormCheckout;
