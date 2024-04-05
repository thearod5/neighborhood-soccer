import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "components/common/customButton";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppStackParamList } from "src/config/screenConfigurations";
import { useAppTheme } from "theme/appThemeProvider";
import { commonStyles } from "theme/commonStyles";
import { AppTheme } from "theme/types";

type LandingScreenProps = {
  navigation: StackNavigationProp<AppStackParamList, "Landing">;
};

export const LandingScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
  console.log("Entering landing screen...");
  const theme: AppTheme = useAppTheme();

  return (
    <View style={[commonStyles.pageContainer]}>
      <View
        style={[
          styles.innerContainer,
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
            <CustomButton
              title="Login"
              customStyles={{ width: theme.targetWidth }}
              onPress={() => navigation.navigate("Login")}
              buttonColor={theme.primary}
              textColor={theme.text}
            />
            <CustomButton
              title="Create Account"
              customStyles={{ width: theme.targetWidth }}
              onPress={() => navigation.navigate("AccountCreate")}
              buttonColor={theme.emphasis}
              textColor={theme.text}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    margin: "auto",
  },
  title: {
    textAlign: "center",
  },
  buttonContainer: {},
});
