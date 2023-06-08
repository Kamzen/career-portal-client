import * as React from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SchoolIcon from "@mui/icons-material/School";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SubjectIcon from "@mui/icons-material/Subject";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { LinearProgress, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 20,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.secondary}`]: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
//   }
// }));

export default function AboutUserInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      sx={{
        maxWidth: { xs: 320, sm: 480, md: "100%" }
      }}
      spacing={2}
    >
      <Stack spacing={1}>
        <Typography color='text.primary' sx={{ width: "100%", textAlign: 'start' }}>
          Profile Completion
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value="50"
              color="secondary"
              sx={{ height: 15, borderRadius: 1 }}
            />
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              50
            )}%`}</Typography>
          </Box>
        </Box>
      </Stack>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        textColor="secondary"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 }
          },
          bgcolor: "background.paper"
          // border: 1,
          // borderColor: "secondary.main"
        }}
        TabIndicatorProps={{
          sx: {
            display: "none",
            color: "secondary.main",
            backgroundColor: "secondary.main"
          }
        }}
      >
        <Tab
          label="Basic Education"
          icon={<AutoStoriesIcon />}
          iconPosition="start"
          sx={{
            fontWeight: "bolder",
            fontSize: 14,
            textTransform: "capitalize"
          }}
          {...a11yProps(0)}
        />
        <Tab
          label="Tertiary Education"
          icon={<SchoolIcon />}
          iconPosition="start"
          sx={{
            fontWeight: "bolder",
            fontSize: 14,
            textTransform: "capitalize"
          }}
          {...a11yProps(1)}
        />
        <Tab
          label="Professionals Skiils"
          icon={<SettingsSuggestIcon />}
          iconPosition="start"
          sx={{
            fontWeight: "bolder",
            fontSize: 14,
            textTransform: "capitalize"
          }}
          {...a11yProps(2)}
        />
        <Tab
          label="Certification & Training"
          icon={<CardMembershipIcon />}
          iconPosition="start"
          sx={{
            fontWeight: "bolder",
            fontSize: 14,
            textTransform: "capitalize"
          }}
          {...a11yProps(3)}
        />
        <Tab
          label="Attachment"
          icon={<AttachFileIcon />}
          iconPosition="start"
          sx={{
            fontWeight: "bolder",
            fontSize: 14,
            textTransform: "capitalize"
          }}
          {...a11yProps(4)}
        />
        <Tab
          label="Learner Programmes"
          icon={<SubjectIcon />}
          iconPosition="start"
          sx={{
            fontWeight: "bolder",
            fontSize: 14,
            textTransform: "capitalize"
          }}
          {...a11yProps(5)}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </Stack>
  );
}
