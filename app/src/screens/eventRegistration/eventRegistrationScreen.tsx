import CustomButton from "components/common/customButton";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { defaultEvents } from "testData/testEvents";
import { useAppTheme } from "theme/appThemeProvider";
import { commonStyles } from "theme/commonStyles";

function startPayment() {}

export const EventRegistrationScreen = () => {
  const event = defaultEvents[0];
  const theme = useAppTheme();
  return (
    <View
      style={[commonStyles.pageContainer, { justifyContent: "space-around" }]}
    >
      <Text style={[styles.title, { color: theme.text }]}>{event.title}</Text>
      <View style={[commonStyles.centerRow, { width: theme.targetWidth }]}>
        <Image source={{ uri: event.imageUri }} style={styles.image} />
      </View>
      <View style={[commonStyles.centerRow, { width: theme.targetWidth }]}>
        <CustomButton
          customStyles={styles.button}
          onPress={startPayment}
          title={"Payment"}
          buttonColor={theme.primary}
          textColor={theme.text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 25,
  },
  text: {
    margin: 10,
    height: "10%",
  },
  button: { width: "75%" },
});
