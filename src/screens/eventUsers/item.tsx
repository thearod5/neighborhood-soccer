import { User } from "domain/user";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppTheme, useAppTheme } from "theme/index";

interface EventUserItem {
  user: User;
}
export const EventUserItem: React.FC<EventUserItem> = ({ user }) => {
  const theme: AppTheme = useAppTheme();
  return (
    <View style={[styles.container, { borderColor: theme.text }]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: user.profileImage }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>{user.username}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    height: "100%",
    width: "100%",
    minHeight: 50,
    maxHeight: 75,
  },
  information: {
    flex: 2,
    padding: 5,
  },
  title: {
    color: "white",
  },
  bio: {
    color: "gray",
  },
  imageContainer: {
    flex: 1,
    padding: 5,
  },
  image: {
    borderRadius: "100%",
    width: "100%",
    height: "100%",
  },
});
