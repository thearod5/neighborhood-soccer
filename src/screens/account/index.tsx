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
        <View style={styles.centerColumn}>
          <Image
            source={{ uri: user.profileImage }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={[styles.text, { color: theme.text }]}>
            {user.username}
          </Text>
          <Text style={[styles.text, { color: theme.link }]}>{user.email}</Text>
        </View>
      </View>
      <View style={[styles.centerRow]}>
        <View style={[styles.bioContainer]}>
          <Text style={[styles.text, { color: theme.text }]}>{user.bio}</Text>
        </View>
      </View>
      <View style={[styles.centerRow]}>
        <CustomButton
          title="Logout"
          buttonColor={theme.background}
          textColor={theme.emphasis}
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
  image: {
    height: 250, // Image takes half the width
    width: 250, // Image takes full height
    marginRight: 10,
    borderRadius: 10, // Adjust as needed
  },
  bioContainer: {
    flexDirection: "column",
    width: "50%",
  },
  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  centerColumn: {
    flexDirection: "column",
    alignItems: "center",
    margin: 25,
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
});
