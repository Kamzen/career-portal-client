import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  InputLabel,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Form, Formik } from "formik";
import TextFieldWrapper from "../form-components/TextFieldWrapper";
import SelectFieldWrapper from "../form-components/SelectFieldWrapper";
import { useMutation } from "@tanstack/react-query";

const ProfessionalsSkillsModal = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { mutate, error, isError, isSuccess, data } = useMutation({
    mutationFn: (formData) => {},
    onSuccess: (data) => {},
    onError: (err) => {}
  });

  return (
    <div>
      <Button
        variant="contained"
        sx={{ fontSize: 12 }}
        onClick={handleClickOpen}
      >
        Add Professional Skills
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
          <Typography>Add Professional Skills</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Stack>
        <DialogContent>
          <Formik
            initialValues={{
              skill: "",
              skillLevel: ""
            }}
            
          >
            {(formik) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>Skill</InputLabel>
                      <TextFieldWrapper name="skill" label="Skill" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <InputLabel sx={{ mb: 1 }}>Skill Level</InputLabel>
                      <SelectFieldWrapper
                        name="skillLevel"
                        label="Skill Level"
                        options={[
                          {
                            value: "Beginner",
                            label: "Beginner"
                          },
                          {
                            value: "Intermediate",
                            label: "Intermediate"
                          },
                          {
                            value: "Expert",
                            label: "Expert"
                          }
                        ]}
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

export default ProfessionalsSkillsModal;
