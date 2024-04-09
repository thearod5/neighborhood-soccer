import { createTheme } from "@mui/material";
import { backgroundColor, chicagoBlue, chicagoRed } from "./constants";

export const lightMode = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "white",
    },
    text: {
      primary: "black",
      secondary: chicagoRed,
    },
  },
});

export const darkMode = createTheme({
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
});
