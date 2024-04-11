import { LinearProgress, Paper, Stack } from "@mui/material";
import React from "react";
import ProfessionalsSkillsModal from "./modals/ProfessionalSkillsModal";
import { useQuery } from "@tanstack/react-query";
import ApiQueries from "../apiQuries";

const ProfessionalsSkills = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => {
      return ApiQueries.userInfo();
    },
  });

  console.log(data);

  if (isLoading) {
    return <LinearProgress />;
  }

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
        <ProfessionalsSkillsModal userId={data?.id} />
      </Stack>
    </Stack>
  );
};

export default ProfessionalsSkills;
