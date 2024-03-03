import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { AppStackParamList } from "stack/screenConfigurations";
import { eventState } from "state/eventState";
import { useAppTheme } from "theme/appThemeProvider";
import { commonStyles } from "theme/commonStyles";
import { AppTheme } from "theme/types";
import { EventUserItem } from "./evenUserItem";

interface EventUsersProps {
  navigation: StackNavigationProp<AppStackParamList, "EventUsers">;
}

export const EventUsersScreen: React.FC<EventUsersProps> = ({ navigation }) => {
  const theme: AppTheme = useAppTheme();
  const selectedEvent = eventState.selectedEvent;
  if (selectedEvent === null) {
    navigation.navigate("EventList");
    return null;
  }

  const users = selectedEvent.users;

  return (
    <View style={commonStyles.pageContainer}>
      <Text style={[theme.title]}>Event Users</Text>
      <ScrollView style={{ width: theme.largeWidth }}>
        {users.map((user) => {
          return (
            <EventUserItem key={user.id} user={user} navigation={navigation} />
          );
        })}
      </ScrollView>
    </View>
  );
};
