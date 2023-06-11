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

const BasicEducation = () => {
  return (
    <Stack minHeight={100} padding={2} sx={{ position: "relative" }} component={Paper}>
      <Stack
        // border={1}
        width="100%"
        direction="row"
        justifyContent="end"
        sx={{ position: "absolute", bottom: 0, left: 0, padding: 2 }}
      >
        <AddEducationModal />
      </Stack>
    </Stack>
  );
};

export default BasicEducation;

const AddEducationModal = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const grades = [
    {
      value: "Grade 9",
      label: "Grade 9"
    },
    {
      value: "Grade 10",
      label: "Grade 10"
    },
    {
      value: "Grade 11",
      label: "Grade 11"
    },
    {
      value: "Grade 12",
      label: "Grade 12(Matric)"
    }
  ];

  return (
    <div>
      <Button
        variant="contained"
        sx={{ fontSize: 12 }}
        onClick={handleClickOpen}
      >
        Add Education
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
          <Typography>Add Basic Education</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Stack>
        <DialogContent>
          <Formik
            initialValues={{
              grade: "",
              schoolName: "",
              schoolCity: "",
              schoolProvince: ""
            }}
          >
            {(formik) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>Highest Grade Passed</InputLabel>
                      <SelectFieldWrapper
                        name="grade"
                        label="Grade"
                        options={grades}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel>Hogh School Name</InputLabel>
                      <TextFieldWrapper
                        name="schoolName"
                        label="School Name"
                        sx={{ mt: 1 }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel>City</InputLabel>
                      <TextFieldWrapper
                        name="schoolCity"
                        label="City"
                        sx={{ mt: 1 }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <InputLabel>Province</InputLabel>
                      <TextFieldWrapper
                        name="schoolProvince"
                        label="Province"
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
