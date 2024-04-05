import "@expo/metro-runtime"; // enables hot refresh
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "src/config/appStack";
import { darkTheme } from "theme/appTheme";
import { ThemeProvider } from "theme/appThemeProvider";

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
