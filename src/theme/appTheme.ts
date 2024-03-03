import {
  backgroundColor,
  chicagoBlue,
  chicagoRed,
  rowItemBackground,
  textColor,
} from "./constants";
import { AppTheme } from "./types";

export const darkTheme: AppTheme = {
  title: {
    fontSize: 24,
    padding: 20,
    color: textColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  rowItem: {
    fontSize: 16,
    color: textColor,
    backgroundColor: rowItemBackground,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
  },
  rowImage: {
    borderRadius: 5,
    margin: 10,
    aspectRatio: 1, // Ensure the width and height are equal
    width: "75%",
  },
  // Colors
  text: textColor,
  background: backgroundColor,
  primary: chicagoBlue, //chicago blue
  emphasis: chicagoRed, //chicago red
  link: chicagoBlue, //placeholder (currently chicago blue)
  minor: "grey",
  // Dimensions
  targetWidth: "75%",
  largeWidth: "85%",
};
