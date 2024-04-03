import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { api } from "api/baseApi";
import { FormComponent } from "components/common/forms/form";
import { FormField } from "components/common/forms/types";
import { UserLogin } from "domain/user";
import React from "react";
import { Alert } from "react-native";
import { AppStackParamList } from "src/config/screenConfigurations";
import { userState } from "state/userState";
import { useAppTheme } from "theme/appThemeProvider";

interface LoginScreenProps {
  navigation: StackNavigationProp<AppStackParamList, "Login">;
}

const loginFields: FormField[] = [
  { key: "header", type: "header", displayName: "Login" },
  { key: "username", displayName: "Username or Email", type: "text" },
  { key: "password", displayName: "Password", type: "password" },
  // Future: { key: "profilePicture", displayName: "Profile Picture", type: "image" },
];

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const theme = useAppTheme();

  const handleCreateUser = (formData: Record<string, string>) => {
    const username = formData["username"];
    const password = formData["password"];

    if (!username || !password) {
      console.log("Missing info");
      Alert.alert("Error", "Username, password, and email are required.");
      return;
    }

    const userLogin: UserLogin = {
      username,
      password,
    };
    api("login", userLogin)
      .then((response) => {
        Alert.alert("Success", "Account has been created.");
        userState.user = response;
        navigation.dispatch(
          CommonActions.reset({
            index: 0, // Indicates the active route in the routes array
            routes: [{ name: "EventList" }],
          })
        );
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Error", "An error occurred: " + error.message);
      });
  };

  return (
    <FormComponent
      fields={loginFields}
      submitText="Login"
      onSubmit={handleCreateUser}
      theme={theme}
    />
  );
};
