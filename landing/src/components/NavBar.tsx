import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default NavBar;
