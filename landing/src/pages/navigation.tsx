import { Link } from "react-router-dom";
import { useTheme } from "../theme/themeContext";

export function Navigation() {
  const theme = useTheme();

  return (
    <nav
      style={{
        backgroundColor: theme.primaryColor,
        color: theme.backgroundColor,
        margin: 0,
        padding: 0,
      }}
    >
      <h1>Chicago Neighborhood Soccer</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
