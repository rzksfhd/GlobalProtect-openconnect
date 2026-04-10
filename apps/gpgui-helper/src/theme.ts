import { createTheme } from "@mui/material/styles";

// GPConnect Premium Theme - Professional Dark Blue & Gold
export const premiumTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#094cb2", // Deep blue
      light: "#3d7be0",
      dark: "#002682",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d4a520", // Gold accent
      light: "#ffd95b",
      dark: "#9e7700",
      contrastText: "#000000",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a237e",
      secondary: "#5c6bc0",
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 2px 8px rgba(9, 76, 178, 0.25)",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: "rgba(9, 76, 178, 0.1)",
        },
        bar: {
          borderRadius: 4,
          background: "linear-gradient(90deg, #094cb2 0%, #3d7be0 100%)",
        },
      },
    },
  },
});
