import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import AddEditAttachmentModal from "./modals/AddEditAttachmentModal";

const Attachments = () => {
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
          Documents
        </Typography>
        <AddEditAttachmentModal />
      </Stack>
    </Stack>
  );
};

export default Attachments;
