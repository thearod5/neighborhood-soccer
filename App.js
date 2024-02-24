import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './src/config/themeProvider';
import {darkTheme} from "./src/config/theme";
import {AuthProvider} from './src/context/authContext';
import {AppStack} from "./src/appNavigation";


function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <AuthProvider> {/* Wrap NavigationContainer with AuthProvider */}
                <NavigationContainer>
                    <AppStack/>
                </NavigationContainer>
            </AuthProvider>
        </ThemeProvider>
    );
}


export default App;