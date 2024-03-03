import { StackNavigationProp } from "@react-navigation/stack";
import { User } from "domain/user";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppStackParamList } from "stack/screenConfigurations";
import { useAppTheme } from "theme/appThemeProvider";
import { AppTheme } from "theme/types";

interface EventUserItemProps {
  user: User;
  navigation: StackNavigationProp<AppStackParamList, "EventList">;
}

export const EventUserItem: React.FC<EventUserItemProps> = ({
  user,
  navigation,
}) => {
  const theme: AppTheme = useAppTheme();
  return (
    <TouchableOpacity style={theme.rowItem}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: user.profileImage }} style={theme.rowImage} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={{ color: theme.background }}>{user.username}</Text>
        <Text style={{ color: theme.minor }}>{user.bio}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 2,
    padding: 5,
  },
});
