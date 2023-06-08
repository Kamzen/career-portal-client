import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../../images/square-logo.jpeg";
import {
  Avatar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Tooltip
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
// import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import { SignOutButton } from "../SignOutButton";

export default function Navigation({ children, setThemeMode, currentTheme }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          border: "none",
          borderRadius: 0
        }}
      >
        <Toolbar>
          <IconButton>
            <Avatar className="Icon" alt="Node Icon" src={logo} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, ml: 2 }}
          >
            Career Portal
          </Typography>
          <Box sx={{ mx: "auto" }}></Box>
          <Stack direction="row" spacing={2}>
            <Tooltip title="Set Theme">
              {currentTheme ? (
                <IconButton
                  sx={{ color: "#FFFFFF" }}
                  onClick={() => setThemeMode(!currentTheme)}
                >
                  <DarkModeIcon />
                </IconButton>
              ) : (
                <IconButton
                  sx={{ color: "#FFFFFF" }}
                  onClick={() => setThemeMode(!currentTheme)}
                >
                  <WbSunnyTwoToneIcon />
                </IconButton>
              )}
            </Tooltip>

            <>
              {/* <NotificationsPanel /> */}
              {/* <Tooltip title="Profile">
                <IconButton
                  color="inherit"
                  // onClick={() => navigate("/profile")}
                >
                  <PersonOutlineTwoToneIcon />
                </IconButton>
              </Tooltip> */}

              <SignOutButton />
            </>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 5
        }}
      >
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}
