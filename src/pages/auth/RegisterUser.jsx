import {
  Alert,
  Button,
  Grid,
  InputLabel,
  LinearProgress,
  Stack,
  Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import TextFieldWrapper from "../../components/form-components/TextFieldWrapper";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import ApiQueries from "../../apiQuries";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import bgImg from "../../images/Untitled-2.bcecf2a1201a8f598c47.png";

const RegisterUser = () => {
  const navigate = useNavigate();

  const { mutate, isLoading, error, isSuccess, data } = useMutation({
    mutationFn: (formData) => {
      const data = ApiQueries.registerUser(formData);
      return data;
    },
    onSuccess: (data) => {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
    onError: (error) => {
      console.log(error);
    }
  });

  return (
    <Stack>
      <Stack
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "200px -100px",
          minHeight: "89vh",
          maxHeight: "110vh",
          width: "100%",
          backgroundColor: "#FFFFFF"
        }}
        // spacing={2}
        padding={1}
        paddingX={2}
        paddingY={4}
      >
        <Stack spacing={2} width="50%">
          {error?.response?.status === 409 && (
            <Alert severity="error" color="error" sx={{ m: 2, width: "100%" }}>
              {error?.response?.data?.message}
            </Alert>
          )}
          {isSuccess && (
            <Alert severity="error" color="error" sx={{ m: 2, width: "100%" }}>
              {data.message}{" "}
            </Alert>
          )}

          <Grid container>
            <Grid item xs={12} md={12}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  identificationNumber: "",
                  firstName: "",
                  lastName: "",
                  mobileNumber: "",
                  confirmPassword: "",
                  userType: "student"
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .required("Email required")
                    .email("Please prodive a valid email format"),
                  password: Yup.string()
                    .required("Password required")
                    .min(8, "At least 8 characters required for password"),
                  confirmPassword: Yup.string()
                    .required("Confirm password required")
                    .oneOf([Yup.ref("password"), null], "Passwords must match"),
                  firstName: Yup.string().required("FirstName required"),
                  lastName: Yup.string().required("LastName required"),
                  identificationNumber: Yup.string()
                    .required("ID Number is a required field")
                    .test(
                      "id_number",
                      "Please provide valid Identification Number",
                      function (num) {
                        let idNumber = num?.toString();
                        var correct = true;
                        if (
                          idNumber?.length !== 13 ||
                          !!isNaN(parseFloat(num))
                        ) {
                          correct = false;
                        }
                        var tempDate = new Date(
                          idNumber?.substring(0, 2),
                          idNumber?.substring(2, 4) - 1,
                          idNumber?.substring(4, 6)
                        );
                        if (tempDate instanceof Date) {
                          correct = true;
                        } else {
                          correct = false;
                        }
                        var tempTotal = 0;
                        var checkSum = 0;
                        var multiplier = 1;

                        for (var i = 0; i < 13; ++i) {
                          tempTotal =
                            parseInt(idNumber?.charAt(i)) * multiplier;
                          if (tempTotal > 9) {
                            tempTotal =
                              parseInt(tempTotal.toString().charAt(0)) +
                              parseInt(tempTotal.toString().charAt(1));
                          }
                          checkSum = checkSum + tempTotal;
                          multiplier = multiplier % 2 === 0 ? 1 : 2;
                        }
                        if (checkSum % 10 !== 0) {
                          correct = false;
                        }
                        if (correct) {
                          return true;
                        } else {
                          return false;
                        }
                      }
                    )
                })}
                onSubmit={(values) => {
                  mutate(values);
                }}
              >
                {() => {
                  return (
                    <Form>
                      {isLoading && <LinearProgress />}

                      <Stack alignItems="center">
                        <Typography
                          fontWeight="bolder"
                          fontSize={30}
                          letterSpacing={5}
                          fontFamily="Roboto, Reenie Beanie"
                        >
                          Register
                        </Typography>
                      </Stack>

                      <Grid container padding={2} spacing={2}>
                        <Grid item xs={12} md={6}>
                          <InputLabel>FirstName</InputLabel>

                          <TextFieldWrapper
                            name="firstName"
                            label="FirstName"
                            sx={{ mt: 1 }}
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <InputLabel>LastName</InputLabel>
                          <TextFieldWrapper
                            name="lastName"
                            label="LastName"
                            sx={{ mt: 1 }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <InputLabel>Identification Number</InputLabel>
                          <TextFieldWrapper
                            name="identificationNumber"
                            label="Identification Number"
                            sx={{ mt: 1 }}
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <InputLabel>Email</InputLabel>
                          <TextFieldWrapper
                            name="email"
                            label="Email"
                            sx={{ mt: 1 }}
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <InputLabel>Password</InputLabel>

                          <TextFieldWrapper
                            type="password"
                            name="password"
                            label="Password"
                            sx={{ mt: 1 }}
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <InputLabel>Confirm Password</InputLabel>

                          <TextFieldWrapper
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            sx={{ mt: 1 }}
                          />
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <Button
                            variant="contained"
                            color="primary"
                            endIcon={<AppRegistrationIcon />}
                            sx={{ fontWeight: "bolder", width: "100%" }}
                            type="submit"
                          >
                            Register
                          </Button>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Button
                            variant="outlined"
                            // color="warning"
                            endIcon={<LoginIcon />}
                            sx={{ fontWeight: "bolder", width: "100%" }}
                            onClick={() => navigate("/login")}
                          >
                            Login
                          </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={<AppRegistrationIcon />}
                            sx={{ fontWeight: "bolder", width: "100%" }}
                          >
                            Download Career Guide
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  );
                }}
              </Formik>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
    // <Stack
    //   width="100%"
    //   paddingY={4}
    //   // height={{ xs: "80vh" }}
    //   justifyContent="center"
    // >
    //   {isSuccess && <AlertPopup open={true} message={data.message} />}

    //   <Grid container>
    //     <Grid item xs={12} md={12}>
    //       <Formik
    //         initialValues={{
    //           email: "",
    //           password: "",
    //           identificationNumber: "",
    //           firstName: "",
    //           lastName: "",
    //           mobileNumber: "",
    //           confirmPassword: "",
    //           userType: "student"
    //         }}
    //         validationSchema={Yup.object().shape({
    //           email: Yup.string()
    //             .required("Email required")
    //             .email("Please prodive a valid email format"),
    //           password: Yup.string()
    //             .required("Password required")
    //             .min(8, "At least 8 characters required for password"),
    //           confirmPassword: Yup.string()
    //             .required("Confirm password required")
    //             .oneOf([Yup.ref("password"), null], "Passwords must match"),
    //           firstName: Yup.string().required("FirstName required"),
    //           lastName: Yup.string().required("LastName required"),
    //           identificationNumber: Yup.string()
    //             .required("ID Number is a required field")
    //             .test(
    //               "id_number",
    //               "Please provide valid Identification Number",
    //               function (num) {
    //                 let idNumber = num?.toString();
    //                 var correct = true;
    //                 if (idNumber?.length !== 13 || !!isNaN(parseFloat(num))) {
    //                   correct = false;
    //                 }
    //                 var tempDate = new Date(
    //                   idNumber?.substring(0, 2),
    //                   idNumber?.substring(2, 4) - 1,
    //                   idNumber?.substring(4, 6)
    //                 );
    //                 if (tempDate instanceof Date) {
    //                   correct = true;
    //                 } else {
    //                   correct = false;
    //                 }
    //                 var tempTotal = 0;
    //                 var checkSum = 0;
    //                 var multiplier = 1;

    //                 for (var i = 0; i < 13; ++i) {
    //                   tempTotal = parseInt(idNumber?.charAt(i)) * multiplier;
    //                   if (tempTotal > 9) {
    //                     tempTotal =
    //                       parseInt(tempTotal.toString().charAt(0)) +
    //                       parseInt(tempTotal.toString().charAt(1));
    //                   }
    //                   checkSum = checkSum + tempTotal;
    //                   multiplier = multiplier % 2 === 0 ? 1 : 2;
    //                 }
    //                 if (checkSum % 10 !== 0) {
    //                   correct = false;
    //                 }
    //                 if (correct) {
    //                   return true;
    //                 } else {
    //                   return false;
    //                 }
    //               }
    //             )
    //         })}
    //         onSubmit={(values) => {
    //           mutate(values);
    //         }}
    //       >
    //         {() => {
    //           return (
    //             <Form>
    //               <Card sx={{ width: { md: "50%", xs: "100%" }, m: "auto" }}>
    //                 <Stack
    //                   // border={1}
    //                   // height={130}
    //                   alignItems="center"
    //                   justifyContent="center"
    //                   sx={{ backgroundColor: "primary.main" }}
    //                   spacing={2}
    //                   py={4}
    //                 >
    //                   <img src={logo} alt="" width={100} height={100} />
    //                 </Stack>

    //                 {isLoading && <LinearProgress />}

    //                 <Typography
    //                   component={Stack}
    //                   alignItems="center"
    //                   justifyContent="center"
    //                   fontWeight="bolder"
    //                   fontSize={20}
    //                   spacing={2}
    //                   sx={{ mt: 2 }}
    //                   textTransform="uppercase"
    //                 >
    //                   Register
    //                 </Typography>
    //                 {error?.response?.status === 409 && (
    //                   <Alert severity="error" color="error" sx={{ m: 2 }}>
    //                     {error?.response?.data?.message}
    //                   </Alert>
    //                 )}
    //                 <Grid container padding={2} spacing={2}>
    //                   <Grid item xs={12} md={6}>
    //                     <InputLabel>FirstName</InputLabel>

    //                     <TextFieldWrapper
    //                       name="firstName"
    //                       label="FirstName"
    //                       sx={{ mt: 1 }}
    //                     />
    //                   </Grid>

    //                   <Grid item xs={12} md={6}>
    //                     <InputLabel>LastName</InputLabel>
    //                     <TextFieldWrapper
    //                       name="lastName"
    //                       label="LastName"
    //                       sx={{ mt: 1 }}
    //                     />
    //                   </Grid>
    //                   <Grid item xs={12} md={6}>
    //                     <InputLabel>Identification Number</InputLabel>
    //                     <TextFieldWrapper
    //                       name="identificationNumber"
    //                       label="Identification Number"
    //                       sx={{ mt: 1 }}
    //                     />
    //                   </Grid>

    //                   <Grid item xs={12} md={6}>
    //                     <InputLabel>Email</InputLabel>
    //                     <TextFieldWrapper
    //                       name="email"
    //                       label="Email"
    //                       sx={{ mt: 1 }}
    //                     />
    //                   </Grid>

    //                   <Grid item xs={12} md={6}>
    //                     <InputLabel>Password</InputLabel>

    //                     <TextFieldWrapper
    //                       type="password"
    //                       name="password"
    //                       label="Password"
    //                       sx={{ mt: 1 }}
    //                     />
    //                   </Grid>

    //                   <Grid item xs={12} md={6}>
    //                     <InputLabel>Confirm Password</InputLabel>

    //                     <TextFieldWrapper
    //                       type="password"
    //                       name="confirmPassword"
    //                       label="Confirm Password"
    //                       sx={{ mt: 1 }}
    //                     />
    //                   </Grid>

    //                   <Grid item xs={12} md={12}>
    //                     <Button type="submit" variant="contained" fullWidth>
    //                       Register
    //                     </Button>
    //                   </Grid>
    //                   <Grid item xs={12} md={12}>
    //                     <Typography>
    //                       Have An Account Already?
    //                       <Link
    //                         sx={{ textDecoration: "none" }}
    //                         onClick={() => navigate("/login")}
    //                       >
    //                         Login
    //                       </Link>
    //                     </Typography>
    //                   </Grid>
    //                 </Grid>
    //               </Card>
    //             </Form>
    //           );
    //         }}
    //       </Formik>
    //     </Grid>
    //   </Grid>
    // </Stack>
  );
};

export default RegisterUser;
