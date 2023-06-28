import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  IconButton,
  InputLabel,
  LinearProgress,
  Stack,
  Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import TextFieldWrapper from "../form-components/TextFieldWrapper";
import SelectFieldWrapper from "../form-components/SelectFieldWrapper";
import CloseIcon from "@mui/icons-material/Close";

import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiQueries from "../../apiQuries";
import AlertPopup from "../AlertPopup";

export default function EditLearnerBasicInformation({ userInfo }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const { mutate, isSuccess, error, isLoading, data, isError } = useMutation({
    mutationFn: (formData) => {
      return ApiQueries.editBasicInformation(formData)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['userInfo'])
    },
    onError: (err) => {
      console.log(err)
    }
  })

  const careerStatusOptions = [
    {
      value: "I obtained a matric certificate",
      label: "I obtained a matric certificate"
    },
    {
      value: "I obtained a matric certificate with university exemption",
      label: "I obtained a matric certificate with university exemption"
    },
    {
      value: "I am currently registered at a tertiary institution",
      label: "I am currently registered at a tertiary institution"
    },
    {
      value: "I have no formal employment",
      label: "I have no formal employment"
    },
    {
      value: "I currently have a part-time job / internship",
      label: "I currently have a part-time job / internship"
    },
    {
      value: "I currently have a full-time, salaried job",
      label: "I currently have a full-time, salaried job"
    }
  ];

  const raceOptions = [
    {
      value: "Black",
      label: "Black"
    }, 
    {
      value: "White",
      label: "White"
    }, 
    {
      value: "Coloured",
      label: "Coloured"
    }, 
    {
      value: "Indian",
      label: "Indian"
    }
  ]

  return (
    <div>
      <Button
        variant="contained"
        sx={{ fontSize: 12 }}
        onClick={handleClickOpen}
      >
        Edit Basic Information
      </Button>
      {
        error && <AlertPopup open={true} message={error.response.data.message} severity='error' />
      }
      {
        isSuccess && !isError && data && <AlertPopup open={true} message={data.message} />
      }
      {
        isError && <AlertPopup open={true} message='Server Error' severity='error' />
      }
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding={2}
          sx={{
            backgroundColor: "primary.main",
            height: 40,
            color: "#FFFFFF",
            fontWeight: "bolder"
          }}
        >
          <Typography>Edit Basic Information</Typography>
          {
            isLoading && <LinearProgress />
          }
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Stack>
        <DialogContent>
          <Formik
            initialValues={{
              id: userInfo?.id || "",
              firstName: userInfo?.firstName || "",
              middleName: userInfo?.middleName || "",
              lastName: userInfo?.lastName || "",
              identificationNumber:
                userInfo?.studentInformation?.identificationNumber || "",
              disbility: userInfo?.studentInformation?.disbility || "",
              careerStatus: userInfo?.studentInformation?.careerStatus || "",
              mobileNumber: userInfo?.studentInformation?.mobileNumber || "",
              race: userInfo?.studentInformation?.race || ""
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required("FirstName required"),
              lastName: Yup.string().required("LastName required"),
              careerStatus: Yup.string().required("Career status required"),
              mobileNumber: Yup.string()
                .required("Mobile number required"),
              race: Yup.string().required("Race is required"),
              disbility: Yup.string().required(
                "Disability status is required"
              ),
              identificationNumber: Yup.string()
                .required("ID Number is a required field")
                .test(
                  "id_number",
                  "Please provide valid Identification Number",
                  function (num) {
                    let idNumber = num?.toString();
                    var correct = true;
                    if (idNumber?.length !== 13 || !!isNaN(parseFloat(num))) {
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
                      tempTotal = parseInt(idNumber?.charAt(i)) * multiplier;
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
              mutate(values)
            }}
          >
            {({errors}) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <InputLabel>FirstName</InputLabel>
                      <TextFieldWrapper
                        name="firstName"
                        label="FirstName"
                        sx={{ mt: 1 }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel>MiddleName(Optional)</InputLabel>
                      <TextFieldWrapper
                        name="middleName"
                        label="MiddleName"
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
                      <InputLabel sx={{ mb: 1 }}>Disability Status</InputLabel>
                      <SelectFieldWrapper
                        name="disbility"
                        label="Disability Status"
                        options={[
                          {
                            value: "None",
                            label: "None"
                          },
                          {
                            value: "Disabled",
                            label: "Disabled"
                          }
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>Career Status</InputLabel>
                      <SelectFieldWrapper
                        name="careerStatus"
                        label="Career Status"
                        options={careerStatusOptions}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>Race</InputLabel>
                      <SelectFieldWrapper
                        name="race"
                        label="Race"
                        options={raceOptions}
                      />
                    </Grid>
                    <Grid item xs={12} md={16}>
                      <InputLabel>Mobile Number</InputLabel>
                      <TextFieldWrapper
                        name="mobileNumber"
                        label="Mobile Number"
                        sx={{ mt: 1 }}
                        type="number"
                      />
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <Box textAlign="end">
                        <Button
                          variant="outlined"
                          autoFocus
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                        <Button
                          variant="contained"
                          type="submit"
                          autoFocus
                          sx={{ ml: 2 }}
                        >
                          Update
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
