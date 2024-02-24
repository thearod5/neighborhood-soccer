import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventList from './pages/eventList';
import EventPage from './pages/eventPage';
import UserPage from './pages/user';
import Icon from 'react-native-vector-icons/RNIMigration';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

// Function to render the user icon
const UserIcon = () => {
    const navigation = useNavigation();
    return (
        <Icon
            name="user"
            size={30}
            onPress={() => navigation.navigate('UserPage')}
            style={{marginRight: 10}}
        />
    );
};

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="EventList"
                component={EventList}
                options={{
                    title: 'Home',
                    headerRight: () => <UserIcon/>,
                }}
            />
            <Stack.Screen name="EventPage" component={EventPage} options={{title: 'Event Details'}}/>
            <Stack.Screen name="UserPage" component={UserPage} options={{title: 'User Profile'}}/>
        </Stack.Navigator>
    );
}

export default AuthStack;
