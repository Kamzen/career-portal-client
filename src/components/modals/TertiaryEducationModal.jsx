import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  InputLabel,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery
} from "@mui/material";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { Form, Formik } from "formik";
import SelectFieldWrapper from "../form-components/SelectFieldWrapper";
import TextFieldWrapper from "../form-components/TextFieldWrapper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiQueries from "../../apiQuries";
import AlertPopup from "../AlertPopup";
import * as Yup from "yup";
import YearDatePicker from "../form-components/YearDatePicker";

const TertiaryEducationModal = ({ tertiaryEducation, userId }) => {
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

  const {
    mutate,
    isSuccess,
    isError,
    data,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (formData) => {
      return ApiQueries.addTertiaryEducation(formData);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (err) => {
      console.log(err);
    }
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  const qualificationLevelOptions = [
    {
      value: "National Certificate",
      label: "National Certificate"
    },
    {
      value: "National Diploma",
      label: "National Diploma"
    },
    {
      value: "National First Degree (Min 360",
      label: "National First Degree (Min 360"
    },
    {
      value: "Post-doctoral Degree",
      label: "Post-doctoral Degree"
    },
    {
      value: "Doctoral Degree",
      label: "Doctoral Degree"
    },
    {
      value: "Masters Degree",
      label: "Masters Degree"
    },
    {
      value: "Professional Qualification",
      label: "Professional Qualification"
    },
    {
      value: "Honours Degree",
      label: "Honours Degree"
    },
    {
      value: "National Higher Diploma",
      label: "National Higher Diploma"
    },
    {
      value: "National Masters Diploma",
      label: "National Masters Diploma"
    },
    {
      value: "National Higher Certificate",
      label: "National Higher Certificate"
    },
    {
      value: "Further Diploma",
      label: "Further Diploma"
    },
    {
      value: "Post Graduate Diploma",
      label: "Post Graduate Diploma"
    },
    {
      value: "Senior Certificate",
      label: "Senior Certificate"
    },
    {
      value: "Qual at Nat Sen Cert level",
      label: "Qual at Nat Sen Cert level"
    },
    {
      value: "Apprenticeship / Trade Cert",
      label: "Apprenticeship / Trade Cert"
    },
    {
      value: "Post Grad B Degree (phasing out) e.g. B Ed",
      label: "Post Grad B Degree (phasing out) e.g. B Ed"
    },
    {
      value: "Post Diploma Diploma (phasing out)",
      label: "Post Diploma Diploma (phasing out)"
    },
    {
      value: "Post-basic Diploma [mainly applies to Nursing]",
      label: "Post-basic Diploma [mainly applies to Nursing]"
    },
    {
      value: "Further Ed and Training Cert (FETC)",
      label: "Further Ed and Training Cert (FETC)"
    },
    {
      value: "National First Degree (Min 480)",
      label: "National First Degree (Min 480)"
    },
    {
      value: "Schl below SenC: (not full qualification)",
      label: "Schl below SenC: (not full qualification)"
    },
    {
      value: "Advanced Certificate",
      label: "Advanced Certificate"
    },
    {
      value: "Advanced Diploma",
      label: "Advanced Diploma"
    },
    {
      value: "Higher Certificate",
      label: "Higher Certificate"
    },
    {
      value: "Occupational Certificate",
      label: "Occupational Certificate"
    }
  ];

  const completionStatus = [
    {
      value: "In Progress",
      label: "In Progress"
    },
    {
      value: "Pending",
      label: "Pending"
    },
    {
      value: "Completed",
      label: "Completed"
    }
  ];

  return (
    <div>
      {error && isError && <AlertPopup open={true} message="Server Error" severity='error' />}
      {isSuccess && data && <AlertPopup open={true} message={data.message} />}
      <Button
        variant="contained"
        sx={{ fontSize: 12 }}
        onClick={handleClickOpen}
      >
        Add Qualification
      </Button>
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
          <Typography>Add Qualification</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Stack>
        <DialogContent>
          <Formik
            initialValues={{
              userId: userId || "",
              educationLevel: "",
              fieldOfStudy: "",
              institution: "",
              startYear: "",
              endYear: "",
              status: ""
            }}
            validationSchema={Yup.object().shape({
              educationLevel: Yup.string().required(
                "Qualification level required"
              ),
              fieldOfStudy: Yup.string().required(
                "Field of study name required"
              ),
              institution: Yup.string().required("Institution required"),
              startYear: Yup.string().required("Year started required"),
              status: Yup.string().required("Status required"),
              endYear: Yup.string().when("status", {
                is: "Completed",
                then: (schema) => Yup.date().required("Year completed Required")
              })
            })}
            onSubmit={(values) => {
              mutate(values);
            }}
          >
            {({ values, errors }) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>
                        Tertiary Education Level
                      </InputLabel>
                      <SelectFieldWrapper
                        name="educationLevel"
                        label="Select Qualification Level"
                        options={qualificationLevelOptions}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel>Field Of Study</InputLabel>
                      <TextFieldWrapper
                        name="fieldOfStudy"
                        label="Field Of Study"
                        sx={{ mt: 1 }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel>Institution</InputLabel>
                      <TextFieldWrapper
                        name="institution"
                        label="Institution"
                        sx={{ mt: 1 }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>Start Year</InputLabel>
                      <YearDatePicker name="startYear" label="Year Started" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>Status</InputLabel>
                      <SelectFieldWrapper
                        name="status"
                        label="Status"
                        options={completionStatus}
                      />
                    </Grid>
                    {values.status === "Completed" && (
                      <Grid item xs={12} md={6}>
                        <InputLabel sx={{ mb: 1 }}>End Year</InputLabel>
                        <YearDatePicker name="endYear" label="Year Completed" />
                      </Grid>
                    )}
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
                          sx={{ ml: 2, px: 3 }}
                        >
                          Add
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
};

export default TertiaryEducationModal;
