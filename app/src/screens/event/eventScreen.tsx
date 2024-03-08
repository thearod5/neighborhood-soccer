import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "components/common/customButton";
import React from "react";
import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { Event } from "src/domain/event";

import { AppStackParamList } from "src/config/screenConfigurations";
import { eventState } from "state/eventState";
import { useAppTheme } from "theme/appThemeProvider";
import { commonStyles } from "theme/commonStyles";
// Define the props expected by this component. Adjust if your route params are different.
interface IndexProps {
  navigation: StackNavigationProp<AppStackParamList, "Event">;
}

export const EventScreen: React.FC<IndexProps> = ({ navigation }) => {
  const event: Event | null = eventState.selectedEvent;
  const theme = useAppTheme();

  if (event === null) {
    navigation.navigate("EventList");
    return <View></View>;
  }

  const screenWidth = Dimensions.get("window").width;
  const imageSize = Math.min(screenWidth * 0.5, 300);

  return (
    <View style={commonStyles.pageContainer}>
      <Text style={theme.title}>{event.title}</Text>
      <Image
        source={{ uri: event.imageUri }}
        style={[{ width: imageSize, height: imageSize }]}
      />

      <View style={commonStyles.columnContainer}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`
            )
          }
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="location-on" size={20} color={theme.text} />
            <Text
              style={[
                styles.textContainerItem,
                {
                  color: theme.text,
                  textDecorationLine: "underline",
                  marginLeft: 5,
                },
              ]}
            >
              {event.location}
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={[styles.textContainerItem, { color: theme.text }]}>
          {event.description}
        </Text>
        <Text style={[styles.textContainerItem, { color: theme.text }]}>
          {event.startTime} - {event.endTime}
        </Text>
        <Text style={[styles.textContainerItem, { color: theme.text }]}>
          Spots Left: {event.spotsLeft}
        </Text>
      </View>
      <CustomButton
        title="See Players"
        customStyles={styles.seePlayers}
        onPress={() => navigation.navigate("EventUsers")}
        buttonColor={theme.background}
        textColor={theme.text}
      />

      <View style={commonStyles.centerRowFull}>
        <View style={styles.registerContainer}>
          <CustomButton
            title="Register"
            onPress={() => navigation.navigate("EventRegistration")}
            buttonColor={theme.emphasis}
            textColor={theme.text}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },

  textContainerItem: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  seePlayers: {
    marginTop: 10,
  },
  registerContainer: {
    width: "50%",
    marginBottom: 50,
  },
});
