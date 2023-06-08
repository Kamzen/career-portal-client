import { Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import userPhoto from "../images/295558557_3253413368206040_662268459652945389_n.jpg";
import AboutUserInfo from "../components/AboutUserInfo";

const Home = () => {
  return (
    <Stack direction="row">
      <Stack width="25%" alignItems="center" p={2}>
        <Card
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            p: 1,
            textAlign: "center"
          }}
          elevation={5}
        >
          <Typography>User Profile</Typography>
          <Stack spacing={1} alignItems="center" justifyContent="center">
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
            <Typography fontSize={12}>ID : 9804046210080</Typography>
            <Typography fontSize={12}>Email: kamzen1994@gmail.com</Typography>
            <Typography fontSize={12}>Contact: +27 797126016</Typography>
            <Typography fontSize={12}>Occupation: Unemployed</Typography>
            <Button variant="contained" sx={{ fontSize: 12 }}>
              Edit Personal Information
            </Button>
            <Typography color="red" fontSize={10}>
              Please note that your address will determine where you will be
              placed.
            </Typography>
            <Typography fontSize={18} fontWeight="bolder">
              Address Information
            </Typography>
            <Typography fontSize={12}>1386 Mthimunye Street,</Typography>
            <Typography fontSize={12}>Ga-Rankuwa Unit 23,</Typography>
            <Typography fontSize={12}>Ga-Rankuwa, </Typography>
            <Typography fontSize={12}>Gauteng,</Typography>
            <Typography fontSize={12}>0208,</Typography>
            <Typography fontSize={12}>
              City of Tshwane Metropolitan Municipality
            </Typography>
            <Button variant="contained" sx={{ fontSize: 12 }}>
              Edit Address Information
            </Button>
          </Stack>
        </Card>
      </Stack>
      <Stack width="75%" p={2}>
        <Card
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            p: 1,
            textAlign: "center",
            minHeight: 300
          }}
          elevation={5}
        >
          <AboutUserInfo />
        </Card>
      </Stack>
    </Stack>
  );
};

export default Home;
