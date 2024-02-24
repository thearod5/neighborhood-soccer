import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventList from "./pages/eventList";
import EventPage from "./pages/eventPage";
import UserPage from "./pages/user";
import LandingPage from "./pages/landing";
import LoginScreen from "./pages/login";
import {useAuth} from "./context/authContext";
import UserIcon from "./nav/userIcon";

const Stack = createNativeStackNavigator();

// Define authenticated screens
const AuthScreens = {
    EventList: {
        name: "EventList",
        component: EventList,
        options: {title: 'Neighborhood Soccer'}
    },
    EventPage: {
        name: "EventPage",
        component: EventPage,
        options: {title: 'Event Details'}
    },
    UserPage: {
        name: "UserPage",
        component: UserPage,
        options: {title: 'User Profile'}
    }
    // Add more authenticated screens here
};

// Define public screens
const PublicScreens = {
    Login: {
        name: "Login",
        component: LoginScreen,
        options: {title: 'Account'}
    },
    Landing: {
        name: "Landing",
        component: LandingPage,
        options: {title: 'Getting Started'}
    },
};

export const AppStack = () => {
    const {user} = useAuth();


    const screenOptions = (screen) => ({
        ...screen.options,
        ...(screen.name === 'EventList' && {headerRight: () => <UserIcon/>})
    });

    return (
        <Stack.Navigator initialRouteName="Landing">
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
