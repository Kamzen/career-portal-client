import {
  Alert,
  Button,
  Card,
  Grid,
  InputLabel,
  LinearProgress,
  Link,
  Stack,
  Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import TextFieldWrapper from "../../components/form-components/TextFieldWrapper";
import logo from "../../images/white_logo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import ApiQueries from "../../apiQuries";
import AlertPopup from "../../components/AlertPopup";

const LoginUser = () => {
  const navigate = useNavigate();

  const { mutate, error, isSuccess, isLoading, data } = useMutation({
    mutationFn: (formData) => {
      const data = ApiQueries.loginUser(formData);

      return data;
    },

    onSuccess: (data) => {
      localStorage.setItem("token", data.user.token);

      window.location.href = "http://localhost:3000/";
    },
    onError: (err) => {
      console.log(err);
    },
    retry: 2
  });

  const { data: info } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => {
      return ApiQueries.userInfo();
    }
  });

  if (info) {
    return <Navigate to="/" />;
  }

  return (
    <Stack
      width="100%"
      paddingY={4}
      // height={{ xs: "80vh" }}
      justifyContent="center"
    >
      {isSuccess && <AlertPopup open={true} message={data.message} />}

      <Grid container spacing={2}>
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
            onSubmit={(values) => {
              mutate(values);
            }}
          >
            {() => {
              return (
                <Form>
                  <Card sx={{ width: { md: "40%", xs: "100%" }, m: "auto", }}>
                    <Stack
                      // border={1}
                      height={130}
                      alignItems="center"
                      justifyContent="center"
                      sx={{ backgroundColor: "primary.main" }}
                      spacing={2}
                    >
                      <img src={logo} alt="" width={100} height={100} />
                    </Stack>

                    {isLoading && <LinearProgress />}

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

                    {error?.response?.status === 404 && (
                      <Alert severity="error" color="error" sx={{ m: 2 }}>
                        {error?.response?.data?.message}
                      </Alert>
                    )}

                    <Grid container spacing={2} p={2}>
                      <Grid item xs={12} md={12}>
                        <InputLabel>Email</InputLabel>
                        <TextFieldWrapper
                          name="email"
                          label="Email"
                          sx={{ mt: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
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
                      <Grid item xs={12} md={12}>
                        <Button type="submit" variant="contained" fullWidth>
                          Login
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography>
                          Don't Have An Account?
                          <Link
                            sx={{ textDecoration: "none" }}
                            onClick={() => navigate("/register")}
                          >
                            Register
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

export default LoginUser;
