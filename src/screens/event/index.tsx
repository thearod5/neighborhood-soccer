import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "components/common/customButton";
import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
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
        <Text style={[styles.title, { color: theme.text }]}>{event.title}</Text>
      </View>
      <View style={styles.centerRow}>
        <Image source={{ uri: event.imageUri }} style={styles.image} />
      </View>

      <View style={styles.centerRow}>
        <View style={styles.textContainer}>
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
          <CustomButton
            title="See Players"
            customStyles={styles.seePlayers}
            onPress={() => navigation.navigate("EventUsers")}
            buttonColor={theme.background}
            textColor={theme.text}
          />
        </View>
      </View>

      <View style={styles.centerRow}>
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
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },

  image: {
    width: "50%",
    height: 200,

    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
  },
  textContainerItem: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  seePlayers: {
    marginTop: 25,
  },
  registerContainer: {
    flexDirection: "column",
    width: "50%",
  },
  //utilities
  centerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
