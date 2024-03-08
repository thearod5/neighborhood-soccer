// List.js
import { StackNavigationProp } from "@react-navigation/stack";
import { ItemList } from "components/common/itemList";
import { Event } from "domain/event";
import React from "react";
import { AppStackParamList } from "src/config/screenConfigurations";
import { eventState } from "state/eventState";
import { EventListItem } from "./evenListItem";

interface EventListProps {
  navigation: StackNavigationProp<AppStackParamList, "EventList">;
}

export const EventListScreen: React.FC<EventListProps> = ({ navigation }) => {
  return (
    <ItemList
      navigation={navigation}
      title="Upcoming Events"
      items={eventState.events}
      renderItem={(event: Event, navigation) => (
        <EventListItem key={event.id} event={event} navigation={navigation} />
      )}
    />
  );
};
