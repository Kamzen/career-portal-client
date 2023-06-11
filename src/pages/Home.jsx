import {
  // Alert,
  // AlertTitle,
  Box,
  Button,
  Card,
  Divider,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React from "react";
import userPhoto from "../images/295558557_3253413368206040_662268459652945389_n.jpg";
import LearnerInformation from "../components/LearnerInformation";
import PublishIcon from "@mui/icons-material/Publish";
import EditLearnerBasicInformation from "../components/modals/EditLearnerBasicInformation";
import AddressInforModal from "../components/modals/AddressInforModal";

const Home = () => {
  const [progress] = React.useState(40);
  const theme = useTheme();
  console.log(useMediaQuery(theme.breakpoints.down("md")));
  return (
    <Box>
      {/* <Alert severity="error" variant="filled" elevation={6}>
        <AlertTitle>Warning</AlertTitle>
        Please note that to be considered for you interest(s) you need to
        complete your profile
      </Alert> */}
      <Stack
        direction={
          useMediaQuery(theme.breakpoints.down("md")) ? "column" : "row"
        }
        mt={2}
      >
        <Stack
          width={useMediaQuery(theme.breakpoints.down("md")) ? "100%" : "25%"}
          alignItems="center"
          spacing={2}
        >
          <Stack spacing={1} width="100%">
            <Typography
              color="text.primary"
              sx={{ width: "100%", textAlign: "start" }}
            >
              Profile Completion
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "100%" }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  color={
                    progress < 50
                      ? "error"
                      : progress >= 50 && progress < 75
                      ? "warning"
                      : "success"
                  }
                  sx={{ height: 15, borderRadius: 1, mr: 1 }}
                />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {`${Math.round(progress)}%`}
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Card
            sx={{
              width: "100%",
              p: 2
              // textAlign: "center"
            }}
            elevation={5}
          >
            <Typography textAlign="center">User Profile</Typography>
            <Stack spacing={0.5} alignItems="center" justifyContent="center">
              <img
                src={userPhoto}
                alt=""
                height={100}
                width={100}
                style={{
                  objectFit: "cover",
                  objectPosition: "top left",
                  borderRadius: "50%"
                }}
              />
              <Typography fontSize={18} fontWeight="bolder">
                Tiyisela Themba Makamu
              </Typography>
              <Typography fontSize={14}>Email: kamzen1994@gmail.com</Typography>
              <Typography fontSize={14}>Contact: +27 797126016</Typography>
              <Typography fontSize={14}>Occupation: Unemployed</Typography>
              <Typography fontSize={14}>ID : 9804046210080</Typography>
              <EditLearnerBasicInformation />
              <Typography component={Stack} spacing={2} paddingTop={2}>
                <Divider sx={{ backgroundColor: "primary.main" }} />
                <Typography color="red" fontSize={10} textAlign="center">
                  Please note that your address will determine where you will be
                  placed.
                </Typography>
              </Typography>
              <Typography fontSize={18} fontWeight="bolder">
                Address Information
              </Typography>
              <Typography fontSize={14}>1386 Mthimunye Street,</Typography>
              <Typography fontSize={12}>Ga-Rankuwa Unit 23,</Typography>
              <Typography fontSize={12}>Ga-Rankuwa, </Typography>
              <Typography fontSize={14}>Gauteng,</Typography>
              <Typography fontSize={14}>0208,</Typography>
              <Typography fontSize={14} textAlign="center">
                City of Tshwane Metropolitan Municipality
              </Typography>
              <AddressInforModal />
            </Stack>
          </Card>
        </Stack>
        <Stack
          width={useMediaQuery(theme.breakpoints.down("md")) ? "100%" : "75%"}
          pl={!useMediaQuery(theme.breakpoints.down("md")) && 2}
          mt={2}
          spacing={2}
          alignItems="end"
        >
          {!useMediaQuery(theme.breakpoints.down("md")) && (
            <Button
              variant="contained"
              color="primary"
              disabled={false}
              startIcon={<PublishIcon />}
            >
              Submit Profile
            </Button>
          )}

          <LearnerInformation />

          {useMediaQuery(theme.breakpoints.down("md")) && (
            <Button
              variant="contained"
              color="primary"
              disabled={false}
              startIcon={<PublishIcon />}
            >
              Submit Profile
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
