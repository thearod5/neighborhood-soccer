import CustomButton from "components/common/customButton";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { commonStyles } from "theme/commonStyles";
import { FormField } from "./types";

interface FormProps {
  fields: FormField[];
  onSubmit: (formData: Record<string, any>) => void;
  theme: any; // Assuming you have a theme context or similar for styling
  submitText: string;
}

export const FormComponent: React.FC<FormProps> = ({
  fields,
  onSubmit,
  theme,
  submitText,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={[commonStyles.pageContainer]}>
      <View style={[commonStyles.marginAuto, { width: theme.targetWidth }]}>
        <ScrollView>
          {fields.map((field) => {
            if (field.type === "button") {
              return (
                <CustomButton
                  key={field.key}
                  buttonColor={theme.primary}
                  title={field.title}
                  onPress={() => field.callback(formData)}
                />
              );
            } else if (field.type === "text" || field.type === "password") {
              return (
                <TextInput
                  key={field.key}
                  placeholder={field.displayName}
                  value={formData[field.key] || ""}
                  onChangeText={(value) => handleChange(field.key, value)}
                  style={styles.input}
                  secureTextEntry={field.type === "password"}
                />
              );
            } else if (field.type === "header") {
              return (
                <Text key={field.key} style={theme.title}>
                  {field.displayName}
                </Text>
              );
            } else {
              console.log("UNhandledCase:" + JSON.stringify(field));
              return null;
            }
          })}
        </ScrollView>
        <CustomButton
          buttonColor={theme.primary}
          title={submitText}
          onPress={() => onSubmit(formData)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
  },
});
