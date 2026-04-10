import { createTheme } from "@mui/material/styles";

// GPConnect Premium Color Palette
const COLORS = {
  DEEP_BLUE: "#094cb2",
  DEEP_BLUE_LIGHT: "#3d7be0",
  DEEP_BLUE_DARK: "#002682",
  GOLD: "#d4a520",
  GOLD_LIGHT: "#ffd95b",
  GOLD_DARK: "#9e7700",
  BACKGROUND_DEFAULT: "#f5f7fa",
  BACKGROUND_PAPER: "#ffffff",
  TEXT_PRIMARY: "#1a237e",
  TEXT_SECONDARY: "#5c6bc0",
} as const;

// GPConnect Premium Theme - Professional Dark Blue & Gold
export const premiumTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLORS.DEEP_BLUE,
      light: COLORS.DEEP_BLUE_LIGHT,
      dark: COLORS.DEEP_BLUE_DARK,
      contrastText: "#ffffff",
    },
    secondary: {
      main: COLORS.GOLD,
      light: COLORS.GOLD_LIGHT,
      dark: COLORS.GOLD_DARK,
      contrastText: "#000000",
    },
    background: {
      default: COLORS.BACKGROUND_DEFAULT,
      paper: COLORS.BACKGROUND_PAPER,
    },
    text: {
      primary: COLORS.TEXT_PRIMARY,
      secondary: COLORS.TEXT_SECONDARY,
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
            boxShadow: `0 2px 8px rgba(9, 76, 178, 0.25)`,
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
          background: `linear-gradient(90deg, ${COLORS.DEEP_BLUE} 0%, ${COLORS.DEEP_BLUE_LIGHT} 100%)`,
        },
      },
    },
  },
});

// Export colors for use in other components
export { COLORS };
