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
      <View style={[styles.centerRow]}>
        <Text style={[styles.title, { color: theme.text }]}>{event.title}</Text>
      </View>
      <View style={[styles.centerRow]}>
        <Image source={{ uri: event.imageUri }} style={styles.image} />
      </View>
      <View style={[styles.centerRow]}>
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
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
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
  //utilities
  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
