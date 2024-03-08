import { StackNavigationProp } from "@react-navigation/stack";
import { api } from "api/baseApi";
import { showError } from "components/common/errors";
import { FormComponent } from "components/common/forms/form";
import { FormFieldConfig } from "components/common/forms/types";
import { User } from "domain/user";
import React from "react";
import { Alert } from "react-native";
import { AppStackParamList } from "src/config/screenConfigurations";
import { useAppTheme } from "theme/appThemeProvider";

interface LoginScreenProps {
  navigation: StackNavigationProp<AppStackParamList, "Login">;
}

const createAccountFields: FormFieldConfig[] = [
  { key: "header", displayName: "New Account", type: "header" },
  { key: "username", displayName: "Username", type: "text" },
  { key: "email", displayName: "Email", type: "text" },
  { key: "password", displayName: "Password", type: "password" },
];

export const AccountCreateScreen: React.FC<LoginScreenProps> = ({
  navigation,
}) => {
  const theme = useAppTheme();

  const handleCreateUser = (formData: Record<string, string>) => {
    const username = formData["username"];
    const password = formData["password"];
    const email = formData["email"];

    if (!username || !password || !email) {
      const error = "Username, password, and email are required.";
      showError(error);
      return;
    }

    const userInfo: User = {
      username,
      email,
      password,
      id: "",
      isAdmin: false,
    };
    api("createUser", userInfo)
      .then((response) => {
        Alert.alert("Success", "Account has been created.");
        navigation.navigate("AccountEdit");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Error", "An error occurred: " + error.message);
      });
  };

  return (
    <FormComponent
      fields={createAccountFields}
      submitText="Create"
      onSubmit={handleCreateUser}
      theme={theme}
    />
  );
};
