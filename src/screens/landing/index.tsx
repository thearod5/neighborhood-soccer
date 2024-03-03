import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "components/common/customButton";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppStackParamList } from "stack/types";
import { userState } from "state/userState";
import { AppTheme, useAppTheme } from "theme/index";

type LandingPageProps = {
  navigation: StackNavigationProp<AppStackParamList, "Landing">;
};

export const LandingScreen: React.FC<LandingPageProps> = ({ navigation }) => {
  const user = userState.user;
  const theme: AppTheme = useAppTheme();

  let body;
  let adminButton = undefined;
  if (user === null) {
    body = (
      <CustomButton
        title="Login"
        onPress={() => navigation.navigate("Login")}
        buttonColor={theme.primary} // Use your theme's button color
        textColor={theme.text} // Text color is now customizable
      />
    );
  } else {
    body = (
      <CustomButton
        title="Events"
        onPress={() => navigation.navigate("EventList")}
        buttonColor={theme.text} // Use your theme's button color
        textColor={theme.background} // Text color is now customizable
      />
    );
    if (user.isAdmin) {
      adminButton = (
        <CustomButton
          title="Create Event"
          onPress={() => navigation.navigate("EventCreate")}
          buttonColor={theme.text} // Use your theme's button color
          textColor={theme.background} // Text color is now customizable
        />
      );
    }
  }
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image
        source={require("../../../assets/logo-transparent.png")}
        style={styles.logo}
      />
      <Text style={[styles.textStyle, { color: theme.text }]}>
        Neighborhood Soccer
      </Text>
      <View style={styles.buttonContainer}>
        {body}
        {adminButton}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Adds padding around the outer View for better spacing
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30, // Adds space below the logo
  },
  textStyle: {
    fontSize: 24, // Increased font size for better readability
    fontWeight: "bold",
    marginBottom: 20, // Adds space below the text
  },
  buttonContainer: {
    width: 200, // Sets a width for the button for better control
    marginTop: 20, // If needed, adjust for spacing above the button
  },
});
