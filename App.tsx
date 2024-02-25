import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppStack } from "stack/appStack";
import { darkTheme, ThemeProvider } from "theme/index";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
