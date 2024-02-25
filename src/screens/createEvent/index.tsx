import { useNavigation } from "@react-navigation/native";
import CustomButton from "components/common/customButton";
import { Event } from "domain/event";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { eventState } from "state/eventState";
import { useAppTheme } from "theme/index";

export const CreateEvent: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const navigation = useNavigation();
  const theme = useAppTheme();
  function handleEventCreate() {
    const event: Event = {
      id: 4,
      imageUri: "",
      title: name,
      location: location,
      description: description,
      startTime: "8:00 PM",
      endTime: "9:30 PM",
      spotsLeft: 5,
    };
    eventState.addEvent(event);
    navigation.navigate("EventList");
  }
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.title}>Event</Text>
      <View style={[styles.inputContainer]}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          multiline={true} // Enable multiline input
          numberOfLines={5} // Set the initial number of lines
        />
      </View>
      <CustomButton
        title="Create"
        customStyles={styles.button}
        onPress={handleEventCreate}
        buttonColor={theme.primary}
        textColor={theme.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "column",
    width: "100%",
    padding: 25,
  },
  button: {
    margin: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    padding: 5,
    borderRadius: 5,
    width: "100%",
    marginBottom: 10,
  },
});
