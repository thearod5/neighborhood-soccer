import { createTheme } from "@mui/material";
import { backgroundColor, chicagoBlue, chicagoRed } from "./constants";

const commonTheme = {
  typography: {
    fontFamily: "roboto",
    h1: {
      fontSize: "2.5rem", // Example font size for h1 in light theme
      fontWeight: "bold", // Make h1 bold
    },
    h2: {
      fontSize: "2rem", // Example font size for h1 in light theme
    },
    h3: {
      fontSize: "1.75rem",
    },
    h4: {
      fontSize: "1.5rem", // Example font size for h1 in light theme
    },
    h5: {
      fontSize: "1.25rem", // Example font size for h1 in light theme
    },
    h6: {
      fontSize: "1.25rem", // Example font size for h1 in light theme
    },
    body1: {
      fontSize: "1.1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
};

export const lightMode = createTheme({
  ...commonTheme,
  palette: {
    secondary: {
      main: chicagoRed,
    },
    mode: "light",
    background: {
      default: "white",
    },
    text: {
      primary: "black",
      secondary: chicagoRed,
    },
  },
  components: {
    // Customizing AppBar component directly
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: chicagoBlue, // Use your custom color here
        },
      },
    },
  },
});

export const darkMode = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    background: {
      default: backgroundColor,
      paper: "#4D4D4D",
    },
    text: {
      primary: "white",
      secondary: chicagoBlue,
    },
  },
  components: {
    // Customizing AppBar component directly
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "black", // Use your custom color here
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-h1": {
            color: "white", // Custom color for dark mode
          },
          "&.MuiTypography-h2": {
            color: "white", // Custom color for dark mode
          },
          "&.MuiTypography-h3": {
            color: "white", // Custom color for dark mode
          },
          "&.MuiTypography-h4": {
            color: "white", // Custom color for dark mode
          },
          "&.MuiTypography-h5": {
            color: "white", // Custom color for dark mode
          },
          "&.MuiTypography-h6": {
            color: "white", // Custom color for dark mode
          },
        },
      },
    },
  },
});
