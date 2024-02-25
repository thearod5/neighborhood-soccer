import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "components/common/customButton";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Event } from "src/domain/event";
import { AppStackParamList } from "stack/types";
import { eventState } from "state/eventState";
import { useAppTheme } from "theme/index";

// Define the props expected by this component. Adjust if your route params are different.
interface IndexProps {
  navigation: StackNavigationProp<AppStackParamList, "Event">;
}

export const EventPage: React.FC<IndexProps> = ({ navigation }) => {
  const event: Event | null = eventState.selectedEvent;
  const theme = useAppTheme();

  if (event === null) {
    navigation.navigate("EventList");
    return <View></View>;
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.centerRow}>
        <Image source={{ uri: event.imageUri }} style={styles.image} />
      </View>
      <View style={styles.centerRow}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.text }]}>
            {event.title}
          </Text>
          <Text style={[styles.details, { color: theme.text }]}>
            Location: {event.location}
          </Text>
          <Text style={[styles.details, { color: theme.text }]}>
            Description: {event.description}
          </Text>
          <Text style={[styles.details, { color: theme.text }]}>
            Start: {event.startTime} - End: {event.endTime}
          </Text>
          <Text style={[styles.details, { color: theme.text }]}>
            Spots Left: {event.spotsLeft}
          </Text>
        </View>
      </View>
      <View style={styles.centerRow}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.text }]}>
            {event.title}
          </Text>
          <Text style={[styles.details, { color: theme.text }]}>
            Location: {event.location}
          </Text>
          <Text style={[styles.details, { color: theme.text }]}>
            Description: {event.description}
          </Text>
          <Text style={[styles.details, { color: theme.text }]}>
            Start: {event.startTime} - End: {event.endTime}
          </Text>
          <Text style={[styles.details, { color: theme.text }]}>
            Spots Left: {event.spotsLeft}
          </Text>
        </View>
      </View>

      <View style={styles.centerRow}>
        <CustomButton
          title="See Players"
          onPress={() => navigation.navigate("EventUsers")}
          buttonColor={theme.primary}
          textColor={theme.text}
        />
      </View>

      <View style={styles.centerRow}>
        <CustomButton
          title="Register"
          onPress={() => navigation.navigate("EventRegistration")}
          buttonColor={theme.emphasis}
          textColor={theme.text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },
  textContainer: {},
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    marginBottom: 5,
  },
  centerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
