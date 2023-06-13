import {
  Button,
  Card,
  Grid,
  InputLabel,
  Link,
  Stack,
  Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import TextFieldWrapper from "../../components/form-components/TextFieldWrapper";
import logo from "../../images/white_logo.png";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();
  return (
    <Stack
      width="100%"
      paddingY={4}
      // height={{ xs: "80vh" }}
      justifyContent="center"
    >
      <Grid container>
        <Grid item xs={12} md={12}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              id: "",
              firstName: "",
              lastName: '',
              race: "",
              mobileNumber: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .required("Email required")
                .email("Please prodive a valid email format"),
              password: Yup.string()
                .required("Password required")
                .min(8, "At least 8 characters required for password")
            })}
          >
            {() => {
              return (
                <Form>
                  <Card sx={{ width: { md: "50%", xs: "100%" }, m: "auto" }}>
                    <Stack
                      border={1}
                      // height={130}
                      alignItems="center"
                      justifyContent="center"
                      sx={{ backgroundColor: "primary.main" }}
                      spacing={2}
                    >
                      <img src={logo} alt="" width={100} height={100} />
                    </Stack>

                    <Typography
                      component={Stack}
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bolder"
                      fontSize={20}
                      spacing={2}
                      sx={{ mt: 2 }}
                      textTransform="uppercase"
                    >
                      Register
                    </Typography>
                    <Grid container padding={2} rowGap={2}>
                    <Grid xs={12} md={6}>
                        <InputLabel>FirstName</InputLabel>

                        <TextFieldWrapper
                          name="firstName"
                          label="FirstName"
                          sx={{ mt: 2 }}
                        />
                      </Grid>

                      <Grid xs={12} md={6}>
                        <InputLabel>LastName</InputLabel>
                        <TextFieldWrapper
                          name="lastName"
                          label="LastName"
                          sx={{ mt: 2 }}
                        />
                      </Grid>
                      <Grid xs={12} md={12}>
                        <InputLabel>Identification Number</InputLabel>
                        <TextFieldWrapper
                          name="id"
                          label="Identification Number"
                          sx={{ mt: 2 }}
                        />
                      </Grid>
                      
                      <Grid xs={12} md={12}>
                        <InputLabel>Password</InputLabel>

                        <TextFieldWrapper
                          type="password"
                          name="password"
                          label="Password"
                          sx={{ mt: 2 }}
                        />
                      </Grid>

                      <Grid xs={12} md={12}>
                        <InputLabel>Email</InputLabel>
                        <TextFieldWrapper
                          name="email"
                          label="Email"
                          sx={{ mt: 2 }}
                        />
                      </Grid>
                      <Grid xs={12} md={12}>
                        <InputLabel>Password</InputLabel>

                        <TextFieldWrapper
                          type="password"
                          name="password"
                          label="Password"
                          sx={{ mt: 2 }}
                        />
                      </Grid>

                      <Grid xs={12} md={12}>
                        <InputLabel>Email</InputLabel>
                        <TextFieldWrapper
                          name="email"
                          label="Email"
                          sx={{ mt: 2 }}
                        />
                      </Grid>
                      <Grid xs={12} md={12}>
                        <InputLabel>Password</InputLabel>

                        <TextFieldWrapper
                          type="password"
                          name="password"
                          label="Password"
                          sx={{ mt: 2 }}
                        />
                      </Grid>

                      <Grid xs={12} md={12}>
                        <InputLabel>Email</InputLabel>
                        <TextFieldWrapper
                          name="email"
                          label="Email"
                          sx={{ mt: 2 }}
                        />
                      </Grid>
                      <Grid xs={12} md={12}>
                        <InputLabel>Password</InputLabel>

                        <TextFieldWrapper
                          type="password"
                          name="password"
                          label="Password"
                          sx={{ mt: 2 }}
                        />
                      </Grid>
                      <Grid xs={12} md={12}>
                        <Button type="submit" variant="contained" fullWidth>
                          Login
                        </Button>
                      </Grid>
                      <Grid xs={12} md={12}>
                        <Typography>
                          Don't Have An Account?{" "}
                          <Link
                            sx={{ textDecoration: "none" }}
                            onClick={() => navigate("/register")}
                          >
                            Rgister
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default RegisterUser;
