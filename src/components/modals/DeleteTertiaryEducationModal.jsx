import React from "react";
// import { useMsal } from "@azure/msal-react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";
import { DeleteForever } from "@mui/icons-material";

/**
 * Renders a sign-out button
 */
export const DeleteTertiaryEducationModal = () => {
  const navigate = useNavigate();

  // const { instance } = useMsal();

  const handleLogout = () => {
    // if (logoutType === "popup") {

    // instance.logoutPopup({
    //   postLogoutRedirectUri: "/",
    //   mainWindowRedirectUri: "/",
    // });

    localStorage.removeItem("userInfo");
    sessionStorage.clear();

    navigate("/");
    window.location.reload();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Delete">
        <IconButton
          color="error"
          size="large"
          aria-label="logout"
          onClick={handleClickOpen}
        >
          <DeleteForever />
        </IconButton>
      </Tooltip>
      <Dialog
        sx={{ border: "3px solid #F44336 " }}
        open={open}
        maxWidth="sm"
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
        <DialogContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "fontWeightBold",
              color: "text.primary"
            }}
          >
            Are you sure you want to delete permanantly?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            {" "}
            Cancel
          </Button>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              handleLogout("redirect");
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
