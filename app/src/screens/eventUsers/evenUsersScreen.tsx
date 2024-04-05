import { StackNavigationProp } from "@react-navigation/stack";
import { ItemList } from "components/common/itemList";
import React from "react";
import { AppStackParamList } from "src/config/screenConfigurations";
import { eventState } from "state/eventState";
import { EventUserItem } from "./evenUserItem";

interface EventUsersProps {
  navigation: StackNavigationProp<AppStackParamList, "EventUsers">;
}

export const EventUsersScreen: React.FC<EventUsersProps> = ({ navigation }) => {
  const selectedEvent = eventState.selectedEvent;
  if (selectedEvent === null) {
    navigation.navigate("EventList");
    return null;
  }

  const users = selectedEvent.users;

  return (
    <ItemList
      navigation={navigation}
      title="Event Users"
      items={users}
      renderItem={(user: User, navigation) => (
        <EventUserItem key={user.id} user={user} navigation={navigation} />
      )}
    />
  );
};
