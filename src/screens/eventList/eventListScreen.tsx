// List.js
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { AppStackParamList } from "stack/screenConfigurations";
import { eventState } from "state/eventState";
import { useAppTheme } from "theme/appThemeProvider";
import { commonStyles } from "theme/commonStyles";
import { AppTheme } from "theme/types";
import { EventListItem } from "./evenListItem";

interface EventListProps {
  navigation: StackNavigationProp<AppStackParamList, "EventList">;
}

export const EventListScreen: React.FC<EventListProps> = ({ navigation }) => {
  const theme: AppTheme = useAppTheme();

  return (
    <View style={commonStyles.pageContainer}>
      <Text style={[theme.title]}>Upcoming</Text>
      <ScrollView
        style={[commonStyles.fullHeight, { width: theme.largeWidth }]}
      >
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
