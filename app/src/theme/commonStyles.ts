import { StyleSheet } from "react-native";
import { backgroundColor } from "./constants";

export const commonStyles = StyleSheet.create({
  fullContainer: {
    width: "100%",
    height: "100%",
  },
  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  centerRowFull: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  pageContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: backgroundColor,
  },
  columnContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  fullHeight: {
    height: "100%",
  },
  fullWidth: {
    width: "100%",
  },
});
