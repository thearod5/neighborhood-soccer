import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from "./context/authContext";
import AuthStack from './AuthStack';
import PublicStack from './PublicStack';

const Stack = createNativeStackNavigator();

function AppStack() {
    const {user} = useAuth();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {user ? (
                <Stack.Screen name="Auth" component={AuthStack}/>
            ) : (
                <Stack.Screen name="Public" component={PublicStack}/>
            )}
        </Stack.Navigator>
    );
}

export default AppStack;
