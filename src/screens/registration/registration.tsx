import CustomButton from "components/common/customButton";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { defaultEvents } from "testData/testEvents";
import { useAppTheme } from "theme/index";

function startPayment() {}

export const EventRegistrationPage = () => {
  const event = defaultEvents[0];
  const theme = useAppTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.emphasis }]}>
        {event.title}
      </Text>
      <View style={[styles.centerRow]}>
        <Image source={{ uri: event.imageUri }} style={styles.image} />
      </View>
      <CustomButton
        customStyles={styles.button}
        onPress={startPayment}
        title={"Payment"}
        buttonColor={theme.primary}
        textColor={theme.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
  },
  text: {
    fontSize: 24,
    alignContent: "center",
  },
  image: {
    width: "50%",
    height: "50%",
  },
  title: {
    margin: 10,
    borderRadius: 5,
    height: "10%",
  },
  centerRow: {
    flexDirection: "row",
    alignContent: "center",
  },
  button: {},
});
