import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "components/common/customButton";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppStackParamList } from "stack/screenConfigurations";
import { userState } from "state/userState";
import { useAppTheme } from "theme/appThemeProvider";
import { commonStyles } from "theme/commonStyles";
import { AppTheme } from "theme/types";

type LandingScreenProps = {
  navigation: StackNavigationProp<AppStackParamList, "Landing">;
};

export const LandingScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
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
        title="Play"
        customStyles={{ width: theme.targetWidth }}
        onPress={() => navigation.navigate("EventList")}
        buttonColor={theme.text} // Use your theme's button color
        textColor={theme.background} // Text color is now customizable
      />
    );
    if (user.isAdmin) {
      adminButton = (
        <CustomButton
          title="Admin Panel"
          customStyles={{ width: theme.targetWidth }}
          onPress={() => navigation.navigate("EventCreate")}
          buttonColor={theme.primary} // Use your theme's button color
          textColor={theme.background} // Text color is now customizable
        />
      );
    }
  }
  return (
    <View style={[commonStyles.pageContainer]}>
      <View
        style={[
          commonStyles.fullHeight,
          commonStyles.columnContainer,
          {
            width: theme.targetWidth,
          },
        ]}
      >
        <View style={[commonStyles.columnContainer, styles.container]}>
          <Image source={require("../../../assets/logo-transparent.png")} />
          <Text style={[theme.title, styles.title]}>Neighborhood Soccer</Text>
          <View style={[commonStyles.fullWidth, commonStyles.columnContainer]}>
            {body}
            {adminButton}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    textAlign: "center",
  },
  buttonContainer: {},
});
