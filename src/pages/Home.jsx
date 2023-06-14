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
import { useQuery } from "@tanstack/react-query";
import ApiQueries from "../apiQuries";

const Home = () => {
  const [progress] = React.useState(40);
  const theme = useTheme();

  const { data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => {
      return ApiQueries.userInfo();
    }

    // staleTime: 1000 * 60 * 60 * 24
  });

  if (data) {
    console.log(data);
  }

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
                {data?.firstName &&
                  `${data?.firstName} ${data?.middleName || ""} ${
                    data?.lastName
                  }`}
              </Typography>
              <Typography fontSize={14}>Email: {data?.email}</Typography>
              <Typography fontSize={14}>
                Contact: {data?.studentInformation?.mobileNumber || "None"}
              </Typography>
              <Typography fontSize={14}>
                Occupation: {data?.studentInformation?.careerStatus || "None"}
              </Typography>
              <Typography fontSize={14}>
                ID : {data?.studentInformation?.identificationNumber || "None"}
              </Typography>
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
              <Typography fontSize={12}>
                {(data?.studentAddress && data?.studentAddress.streetNumber) ||
                  "Street Number, Street Name"}
              </Typography>
              <Typography fontSize={12}>
                {(data?.studentAddress && data?.studentAddress.suburb) ||
                  "Suburb"}
              </Typography>
              <Typography fontSize={12}>
                {(data?.studentAddress && data?.studentAddress.city) || "City"}
              </Typography>
              <Typography fontSize={14}>
                {(data?.studentAddress && data?.studentAddress.province) ||
                  "Province"}
              </Typography>
              <Typography fontSize={14}>
                {(data?.studentAddress && data?.studentAddress.postalCode) ||
                  "Postal Code"}
              </Typography>
              <Typography fontSize={14} textAlign="center">
                {(data?.studentAddress && data?.studentAddress.manicipality) ||
                  "Manicipality"}
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
