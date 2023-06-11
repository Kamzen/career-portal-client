import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import TextFieldWrapper from "../form-components/TextFieldWrapper";
import CloseIcon from "@mui/icons-material/Close";
import LocationAutoComplete from "../LocationAutoComplete";

export default function EditAddressInforModal() {

  const [addressInfor, setAddressInfor] = React.useState(null)

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
        Edit Address Information
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
            <CloseIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Stack>
        <DialogContent>
          <Formik
            initialValues={{
              streetNumber: addressInfor?.streetNumber || "",
              streetName: addressInfor?.streetName || "",
              suburb: addressInfor?.suburb || "",
              manicipality: addressInfor?.manicipality ||  "",
              city: addressInfor?.city || "",
              province: addressInfor?.province || "",
              country: addressInfor?.country || "",
              postalCode: addressInfor?.postalCode || ""
            }}
            enableReinitialize={true}
          >
            {(formik) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <LocationAutoComplete setAddressInfor={setAddressInfor} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* <InputLabel>Street Number</InputLabel> */}
                      <TextFieldWrapper
                        name="streetNumber"
                        label="Street Number"
                        sx={{ mt: 1 }}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* <InputLabel>Street Name</InputLabel> */}
                      <TextFieldWrapper
                        name="streetName"
                        label="Street Name"
                        sx={{ mt: 1 }}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* <InputLabel>Suburb</InputLabel> */}
                      <TextFieldWrapper
                        name="suburb"
                        label="Suburb"
                        sx={{ mt: 1 }}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* <InputLabel>Manicipality</InputLabel> */}
                      <TextFieldWrapper
                        name="manicipality"
                        label="Manicipality"
                        sx={{ mt: 1 }}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* <InputLabel>City</InputLabel> */}
                      <TextFieldWrapper
                        name="city"
                        label="City"
                        sx={{ mt: 1 }}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* <InputLabel>Province</InputLabel> */}
                      <TextFieldWrapper
                        name="province"
                        label="Province"
                        sx={{ mt: 1 }}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* <InputLabel>Country</InputLabel> */}
                      <TextFieldWrapper
                        name="country"
                        label="Country"
                        sx={{ mt: 1 }}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* <InputLabel>Postal Code</InputLabel> */}
                      <TextFieldWrapper
                        name="postalCode"
                        label="Postal Code"
                        sx={{ mt: 1 }}
                        disabled
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
