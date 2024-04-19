import { createTheme } from "@mui/material";

export const themeDark = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid #202020ff"
          // borderRadius: "10px",
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #202020ff",
          borderRadius: "5px"
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          // backgroundColor: "#163683"
        }
      }
    }

    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 8
    //     }
    //   }
    // }
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#3a9bfb",
      main: "#14367c",
      info: "#333",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#0FFFB3"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#333"
    },
    background: {
      // paper: "#444444da",
      paper: "#202020ff",
      default: "#191919ff"
    }
  },
  typography: {
    fontSize: 12
  }
});

export const themeLight = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {}
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 37
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#163683"
        }
      }
    }
  },
  palette: {
    mode: "light",
    primary: {
      light: "#1f2f79",
      main: "#163683",
      info: "#333",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#14a37f",
      contrastText: "#ffffff"
    },
    background: {
      paper: "#fbfbfbff",
      default: "#f3f3f3ff"
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: "Roboto, Reenie Beanie"
  }
});
