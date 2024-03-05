import { StackNavigationProp } from "@react-navigation/stack";
import { api } from "api/baseApi";
import CustomButton from "components/common/customButton";
import { User, UserCreationPayload } from "domain/user";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AppStackParamList } from "stack/screenConfigurations";
import { useAppTheme } from "theme/appThemeProvider";
import { commonStyles } from "theme/commonStyles";

interface LoginScreenProps {
  navigation: StackNavigationProp<AppStackParamList, "Login">;
}

// Only include the minimal fields required for account creation
const userFields: {
  key: keyof UserCreationPayload;
  displayName: string;
}[] = [
  { key: "username", displayName: "Username" },
  { key: "password", displayName: "Password" },
  { key: "email", displayName: "Email" },
];

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const theme = useAppTheme();
  const [user, setUser] = useState<UserCreationPayload>({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (field: keyof UserCreationPayload, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateUser = () => {
    if (!user.username || !user.password || !user.email) {
      Alert.alert("Error", "Username, password, and email are required.");
      return;
    }
    // Simplify userInfo for initial account creation
    const userInfo: User = { ...user, id: "", isAdmin: false };
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
    <ScrollView
      contentContainerStyle={[
        styles.contentContainer,
        commonStyles.pageContainer,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={[styles.innerContainer]}>
        <Text style={styles.title}>Create Account</Text>
        {userFields.map(({ key, displayName }) => (
          <TextInput
            key={key}
            placeholder={displayName}
            value={user[key] || ""}
            onChangeText={(value) => handleChange(key, value)}
            style={styles.input}
            secureTextEntry={key === "password"}
          />
        ))}
        <CustomButton
          buttonColor={theme.primary}
          title="Create Account"
          onPress={handleCreateUser}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  innerContainer: {},
  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  contentContainer: {
    flexGrow: 1, // Ensures that the container takes up the space of the ScrollView
    //justifyContent: "center", // Centers content vertically in ScrollView
    //alignItems: "center", // Centers content horizontally in ScrollView
  },
});
