import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserIcon from "components/nav/userIcon";
import React from "react";
import { AppScreens, ScreenConfig } from "./screenConfigurations";

import LoadingPage from "components/common/loading";
import { loadingState } from "state/loadingState";
const Stack = createNativeStackNavigator();

export const AppStack: React.FC = () => {
  const isLoading = loadingState.isLoading;
  const screenOptions = (screen: ScreenConfig) => ({
    ...screen.options,
    ...{ headerRight: () => <UserIcon /> },
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Stack.Navigator initialRouteName="Account">
      {Object.values(AppScreens).map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screenOptions(screen)}
        />
      ))}
    </Stack.Navigator>
  );
};
