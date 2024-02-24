import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './pages/landing';
import LoginScreen from './pages/login';

const Stack = createNativeStackNavigator();

function PublicStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={LandingPage} options={{title: 'Welcome'}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}}/>
        </Stack.Navigator>
    );
}

export default PublicStack;
