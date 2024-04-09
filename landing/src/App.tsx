import { Box, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./styles/App.css";
import { darkMode, lightMode } from "./styles/theme";

const App: React.FC = () => {
  const [mode, setMode] = useState("dark");
  const theme = mode === "light" ? lightMode : darkMode;
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <NavBar />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            id="detail"
            style={{
              paddingTop: "80px",
              minHeight: "100vh",
              height: "100%",
              width: "85%",
            }}
          >
            <Outlet />
            <Footer />
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default App;
