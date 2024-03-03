import "@expo/metro-runtime"; // enables hot refresh
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "stack/appStack";
import { ThemeProvider } from "theme/appThemeProvider";
import { darkTheme } from "theme/appTheme";

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
