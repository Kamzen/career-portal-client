import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import React from "react";

const LearnerProgrammes = () => {
  return (
    <Stack minHeight={100} padding={2} component={Paper}>
      <Typography textAlign="center">Learner Interventions</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography fontWeight="bolder">Learnership Unemployed</Typography>
          }
        />
        <Typography>
          This is a structured learning programme which includes theoretical and
          practical workplace experiential learning over a period of at least 12
          months and which leads to an occupationally related qualification
          registered on the NQF. Learners are allocated a monthly stipend for
          the duration of the programme.
        </Typography>
        <Typography component={Stack} direction="row">
          <Typography fontWeight="bolder">Duration:</Typography>
          <Typography>12 Months</Typography>
        </Typography>
        <Divider />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography fontWeight="bolder">
              Internship: HET Full Qualification (unemployed entering workplace)
            </Typography>
          }
        />
        <Typography>
          This is a 12 month workplace experience programme designed for
          candidates who have already completed an NQF Level 5 and higher
          qualification that is relevant for employment in the services sector,
          but have not yet gathered the necessary practical experience to enable
          them to obtain employment.
        </Typography>
        <Typography component={Stack} direction="row">
          <Typography fontWeight="bolder">Duration:</Typography>
          <Typography>12 Months</Typography>
        </Typography>
      </FormGroup>
    </Stack>
  );
};

export default LearnerProgrammes;
