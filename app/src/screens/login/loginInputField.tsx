// src/components/InputField.js
import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface LoginInputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export const LoginInputField: React.FC<LoginInputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    style={styles.input}
  />
);

const styles = StyleSheet.create({
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

