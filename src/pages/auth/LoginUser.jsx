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

const LoginUser = () => {
  return (
    <Stack width="100%" paddingY={4}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Formik
            initialValues={{
              email: "",
              password: ""
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
                  <Card sx={{ width: "40%", m: "auto" }}>
                    <Stack
                      border={1}
                      height={130}
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
                      Login
                    </Typography>
                    <Grid container padding={2} rowGap={2}>
                      <Grid xs={12} md={12}>
                        <InputLabel>Email</InputLabel>
                        <TextFieldWrapper
                          name="email"
                          label="Email"
                          sx={{ mt: 2 }}
                        />
                      </Grid>
                      <Grid xs={12} md={12}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <InputLabel>Password</InputLabel>
                          <Link sx={{ textDecoration: "none" }}>
                            Forgot Password
                          </Link>
                        </Stack>
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

export default LoginUser;
