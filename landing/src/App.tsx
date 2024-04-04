import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { backgroundColor } from "./styles/constants";

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <NavBar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
