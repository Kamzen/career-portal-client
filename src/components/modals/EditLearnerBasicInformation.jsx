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
  Stack,
  Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import TextFieldWrapper from "../form-components/TextFieldWrapper";
import SelectFieldWrapper from "../form-components/SelectFieldWrapper";
import CloseIcon from "@mui/icons-material/Close";

export default function EditLearnerBasicInformation() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{ fontSize: 12 }}
        onClick={handleClickOpen}
      >
        Edit Basic Information
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
          <Typography>Edit Basic Information</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{color: '#FFFFFF'}} />
          </IconButton>
        </Stack>
        <DialogContent>
          <Formik
            initialValues={{
              firstName: "",
              middleName: "",
              lastName: "",
              disabilityStatus: "",
              occupation: "",
              mobileNumber: ""
            }}
          >
            {(formik) => {
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
                      <InputLabel>MiddleName</InputLabel>
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
                      <InputLabel sx={{ mb: 1 }}>Disability Status</InputLabel>
                      <SelectFieldWrapper
                        name="disabilityStatus"
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
                      <InputLabel sx={{ mb: 1 }}>Occupation</InputLabel>
                      <SelectFieldWrapper
                        name="occupation"
                        label="Occupation"
                        options={[
                          {
                            value: "Unemployed",
                            label: "Unemployed"
                          },
                          {
                            value: "Employed",
                            label: "Employed"
                          },
                          {
                            value: "Student",
                            label: "Student"
                          }
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel>Mobile Number</InputLabel>
                      <TextFieldWrapper
                        name="mobileNumber"
                        label="Mobile Number"
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
                          sx={{ ml: 2 }}
                        >
                          Save
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
