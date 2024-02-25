import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useAppTheme } from "theme/index";

const LoadingPage = () => {
  const theme = useAppTheme();
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default LoadingPage;
