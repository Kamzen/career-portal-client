import {
  Alert,
  LinearProgress,
  Paper,
  Snackbar,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import CertificateAndTrainingModal from "./modals/CertificateAndTrainingModal";
import { useQuery } from "@tanstack/react-query";
import ApiQueries from "../apiQuries";

const CertificateAndTraining = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => {
      return ApiQueries.userInfo();
    }
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return (
      <Snackbar open={true} autoHideDuration={6000}>
        <Alert severity="error" sx={{ width: "100%" }}>
          Error happened fetching your information
        </Alert>
      </Snackbar>
    );
  }

  return (
    <Stack
      height={518}
      padding={2}
      spacing={2}
      component={Paper}
      sx={{ overflowY: "auto" }}
    >
      <Stack
        // border={1}
        width="100%"
        direction="row"
        justifyContent="space-between"
      >
        <Typography
          sx={{ fontSize: 20, textAlign: "center", fontWeight: "bolder" }}
        >
          Certificate Qualifications
        </Typography>
        <CertificateAndTrainingModal userId={data?.id} />
      </Stack>
    </Stack>
  );
};

export default CertificateAndTraining;
