import "@expo/metro-runtime"; // enables hot refresh
import { NavigationContainer } from "@react-navigation/native";
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
