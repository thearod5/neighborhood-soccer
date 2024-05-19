import { NavLink } from "react-router-dom";
import { chicagoBlue, textColor } from "../styles/constants";

interface Props {
  link: string;
  text: string;
}

const NavButton: React.FC<Props> = ({ link, text }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <NavLink
        to={link}
        style={({ isActive }) => ({
          color: isActive ? chicagoBlue : textColor,
          padding: 0,
          margin: 0,
        })}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default NavButton;
