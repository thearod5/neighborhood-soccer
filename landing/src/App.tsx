import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./styles/App.css";
import { backgroundColor } from "./styles/constants";

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: backgroundColor, color: "white" }}>
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
            paddingTop: "60px",
            minHeight: "100vh",
            height: "100%",
            width: "85%",
          }}
        >
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
