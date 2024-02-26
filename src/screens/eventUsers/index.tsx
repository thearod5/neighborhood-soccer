import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { eventState } from "state/eventState";
import { AppTheme, useAppTheme } from "theme/index";
import { EventUserItem } from "./item";
export const EventUsers: React.FC = () => {
  const theme: AppTheme = useAppTheme();
  const navigation = useNavigation();
  const selectedEvent = eventState.selectedEvent;
  if (selectedEvent === null) {
    navigation.navigate("EventList");
    return null;
  }

  const users = selectedEvent.users;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Event Users</Text>
          <ScrollView>
            {users.map((user) => {
              return <EventUserItem key={user.id} user={user} />;
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  outerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  innerContainer: {
    flexDirection: "column",
    height: "100%",
    width: "75%",
  },
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 10,
  },
});
