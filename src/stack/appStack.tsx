import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContextType, useAuth} from "context/authContext";
import UserIcon from "components/nav/userIcon";
import {ScreenConfig} from "./types";
import {AuthScreens} from "./authScreens";
import {PublicScreens} from "./publicScreens";


const Stack = createNativeStackNavigator();


export const AppStack: React.FC = () => {
    const {user} = useAuth() as AuthContextType;

    const screenOptions = (screen: ScreenConfig) => ({
        ...screen.options,
        ...(screen.name === 'List' && {headerRight: () => <UserIcon/>})
    });

    return (
        <Stack.Navigator initialRouteName="LandingPage">
            {(user ? Object.values(AuthScreens) : Object.values(PublicScreens)).map((screen) => (
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
