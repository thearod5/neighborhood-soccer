import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "components/common/customButton";

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppStackParamList } from "stack/types";
import { userState } from "state/userState";
import { useAppTheme } from "theme/index";
interface AccountPageProps {
  navigation: StackNavigationProp<AppStackParamList, "Account">;
}

export const AccountPage: React.FC<AccountPageProps> = ({ navigation }) => {
  const user = userState.user;
  const theme = useAppTheme();

  if (user === null) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0, // Indicates the active route in the routes array
        routes: [{ name: "Landing" }],
      })
    );
    return null;
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.centerRow]}>
        <Image
          source={{ uri: user.profileImage }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.textContainer]}>
        <Text style={[styles.text, { color: theme.text }]}>
          Username: {user.username}
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          Email: {user.email}
        </Text>
      </View>
      <View style={[styles.centerRow]}>
        <CustomButton
          title="Logout"
          buttonColor={theme.emphasis}
          onPress={userState.logout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  textContainer: {
    flexDirection: "column",
    padding: 25,
  },
  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
  image: {
    width: 150, // Image takes half the width
    height: 150, // Image takes full height
    marginRight: 10,
    borderRadius: 10, // Adjust as needed
  },
});
