import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { eventState } from "state/eventState";
import { AppTheme, useAppTheme } from "theme/index";

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
      <ScrollView>
        {users.map((user) => {
          return (
            <Text key={user.id} style={[{ color: theme.text }]}>
              {user.email}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
