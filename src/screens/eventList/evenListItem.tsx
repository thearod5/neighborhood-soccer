// Event.js
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Event } from "src/domain/event";
import { AppStackParamList } from "stack/screenConfigurations";
import { useAppTheme } from "theme/appThemeProvider";

interface EventListItemProps {
  navigation: StackNavigationProp<AppStackParamList, "EventList">;
  event: Event;
}

export const EventListItem: React.FC<EventListItemProps> = ({
  navigation,
  event,
}) => {
  const theme = useAppTheme();
  return (
    <TouchableOpacity
      style={theme.rowItem}
      onPress={() => navigation.navigate("Event", { event })} // Navigate and pass event ID or other necessary data
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: event.imageUri }} style={theme.rowImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.details}>{event.description}</Text>
        <Text style={styles.details}>
          {event.location} @ {event.startTime}-{event.endTime}
        </Text>
        <Text style={styles.details}>Spots Left: {event.spotsLeft}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: { flex: 1 },
  detailsContainer: {
    flex: 2,
    padding: 5,
  },
  title: {
    fontWeight: "bold",
  },
  details: {
    fontSize: 12,
  },
});
