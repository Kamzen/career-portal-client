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
  Tooltip,
  useMediaQuery,
  useTheme
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
// import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import { SignOutButton } from "../SignOutButton";
import { useQuery } from "@tanstack/react-query";
import ApiQueries from "../../apiQuries";
import { useNavigate } from "react-router-dom";

export default function Navigation({ children, setThemeMode, currentTheme }) {
  const theme = useTheme();

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const { data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => {
      return ApiQueries.userInfo();
    }

    // staleTime: 1000 * 60 * 60 * 24
  });

  if (!token) {
    navigate("/login");
  }

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
            sx={{
              ml: 2,
              width: { xs: "100%", md: "fit-content" },
              textAlign: "center"
            }}
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

              {data && <SignOutButton />}
            </>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: 3,
          mt: 10
        }}
      >
        <Container disableGutters={useMediaQuery(theme.breakpoints.up("md"))}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}
