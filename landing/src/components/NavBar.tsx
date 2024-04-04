import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../res/logo-transparent.png";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <div
        className="logo"
        onClick={() => isMobile && setIsMenuOpen(!isMenuOpen)}
      >
        <img src={logo} alt="Logo" />
        <span>Chicago Neighborhood Soccer</span>
      </div>
      {!isMobile || isMenuOpen ? (
        <>
          <NavLink
            to="/about"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            About Us
          </NavLink>
          <NavLink
            to="/events"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            Events
          </NavLink>
          <NavLink
            to="/faq"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            FAQ
          </NavLink>
        </>
      ) : null}
    </nav>
  );
};

export default NavBar;
