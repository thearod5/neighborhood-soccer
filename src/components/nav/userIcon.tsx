import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import { AppStackParamList } from "stack/types";
import { userState } from "state/userState";
import { useAppTheme } from "theme/appThemeProvider";

const UserIcon: React.FC = () => {
  const theme = useAppTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  if (userState.user === null) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Icon
        name="account-circle"
        size={50}
        color={theme.background}
        onPress={() => {
          navigation.navigate("Account");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default UserIcon;
