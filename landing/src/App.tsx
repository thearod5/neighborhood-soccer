import { ThemeProvider } from "styled-components";
import "./styling/App.css";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">hi</header>
      </div>
    </ThemeProvider>
  );
}

export default App;
