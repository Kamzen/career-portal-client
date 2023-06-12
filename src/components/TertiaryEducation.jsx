import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  Stack,
  Typography,
  useMediaQuery
} from "@mui/material";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { Form, Formik } from "formik";
import TextFieldWrapper from "./form-components/TextFieldWrapper";
import SelectFieldWrapper from "./form-components/SelectFieldWrapper";

const TertiaryEducation = () => {
  return (
    <Stack
      minHeight={100}
      padding={2}
      sx={{ position: "relative" }}
      component={Paper}
    >
      <Stack
        // border={1}
        width="100%"
        direction="row"
        justifyContent="end"
        sx={{ position: "absolute", bottom: 0, left: 0, padding: 2 }}
      >
        <AddTertiaryEducationModal />
      </Stack>
    </Stack>
  );
};

export default TertiaryEducation;

const AddTertiaryEducationModal = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <div>
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
              qualificationLevel: "",
              fieldOfStudy: "",
              institution: "",
              startYear: "",
              endYear: "",
              status: ""
            }}
          >
            {(formik) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>
                        Tertiary Education Level
                      </InputLabel>
                      <SelectFieldWrapper
                        name="qualificationLevel"
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
                      <InputLabel>Start Year</InputLabel>
                      <TextFieldWrapper
                        name="startYear"
                        label="Start Year"
                        sx={{ mt: 1 }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>Status</InputLabel>
                      <SelectFieldWrapper
                        name="status"
                        label="Status"
                        options={[
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
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel>End Year</InputLabel>
                      <TextFieldWrapper
                        name="endYear"
                        label="End Year"
                        sx={{ mt: 1 }}
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
                          onClick={handleClose}
                          autoFocus
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
