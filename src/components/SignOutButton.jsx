import React from "react";
// import { useMsal } from "@azure/msal-react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import Tooltip from "@mui/material/Tooltip";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
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
      <Tooltip title="Logout">
        <IconButton
          color="error"
          size="large"
          aria-label="logout"
          onClick={handleClickOpen}>
          <LogoutTwoToneIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        sx={{ border: "3px solid #F44336 " }}
        open={open}
        maxWidth="sm"
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Logout</DialogTitle>
        <DialogContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "fontWeightBold",
              color: "text.primary",
            }}>
            Are you sure you want to logout?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Cancel</Button>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              handleLogout("redirect");
            }}
            autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
