import React, {createContext, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './src/config/themeProvider';
import {darkTheme} from "./src/config/theme";
import {AuthProvider} from './src/context/authContext';
import AppStack from "./src/appStack";


const ThemeContext = createContext();


export const useTheme = () => useContext(ThemeContext);


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