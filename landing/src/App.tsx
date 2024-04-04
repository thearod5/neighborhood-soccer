import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
