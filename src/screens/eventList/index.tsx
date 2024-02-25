// List.js
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppStackParamList } from "stack/types";
import { eventState } from "state/eventState";
import { AppTheme, useAppTheme } from "theme/index";
import { EventListItem } from "./item";
interface EventListProps {
  navigation: StackNavigationProp<AppStackParamList, "EventList">;
}

export const EventList: React.FC<EventListProps> = ({ navigation }) => {
  const theme: AppTheme = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Upcoming</Text>
      <ScrollView style={[styles.scrollView]}>
        {eventState.events.map((event) => {
          return (
            <EventListItem
              key={event.id}
              event={event}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    padding: 10,
  },
});
