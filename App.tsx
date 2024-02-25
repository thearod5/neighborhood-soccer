import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {darkTheme, ThemeProvider} from 'theme/index';
import {AuthProvider} from 'context/authContext';
import {AppStack} from "stack/appStack";


function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <AuthProvider>
                <NavigationContainer>
                    <AppStack/>
                </NavigationContainer>
            </AuthProvider>
        </ThemeProvider>
    );
}


export default App;