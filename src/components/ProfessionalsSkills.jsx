import { Paper, Stack } from "@mui/material";
import React from "react";
import ProfessionalsSkillsModal from "./modals/ProfessionalSkillsModal";

const ProfessionalsSkills = () => {
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
        <ProfessionalsSkillsModal />
      </Stack>
    </Stack>
  );
};

export default ProfessionalsSkills;
