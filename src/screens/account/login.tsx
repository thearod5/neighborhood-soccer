// src/pages/LoginScreen.js
import { CommonActions, useNavigation } from "@react-navigation/native";
import CustomButton from "components/common/customButton";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { userState } from "state/userState";
import { useAppTheme } from "theme/index";

export const LoginScreen = () => {
  const theme = useAppTheme();
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    userState.login({ username, password: password });
    navigation.dispatch(
      CommonActions.reset({
        index: 0, // Indicates the active route in the routes array
        routes: [{ name: "Landing" }],
      })
    );
  };

  if (userState.user !== null) {
    navigation.navigate("Account");
  }

  return (
    <View
      style={[styles.outerContainer, { backgroundColor: theme.background }]}
    >
      <View style={[styles.innerContainer]}>
        <Text style={styles.title}>Create Account or Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
        />
        <CustomButton
          buttonColor={theme.primary}
          title="Login"
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center", // Align children vertically in the center
    alignItems: "center", // Align children horizontally in the center
  },
  innerContainer: {},
  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center", // Center the text horizontally
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
    padding: 10,
    marginBottom: 20,
    textAlign: "center", // Center the text inside the TextInput horizontally
  },
});
