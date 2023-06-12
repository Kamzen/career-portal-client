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

const CertificateAndTraining = () => {
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
        <CertificateAndTrainingModal />
      </Stack>
    </Stack>
  );
};

const CertificateAndTrainingModal = () => {
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
        Add Certificate/Training
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
          <Typography>Add Certificate/Training</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Stack>
        <DialogContent>
          <Formik
            initialValues={{
              course: "",
              year: ""
            }}
          >
            {(formik) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>Course</InputLabel>
                      <TextFieldWrapper name="course" label="Course" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>Year</InputLabel>
                      <TextFieldWrapper name="year" label="Year" />
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

export default CertificateAndTraining;
