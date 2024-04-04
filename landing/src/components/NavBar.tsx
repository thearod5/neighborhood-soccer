import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton";
import logo from "../res/logo-transparent.png";
import "../styles/NavBar.css";
import { backgroundColor, textColor } from "../styles/constants";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={{ backgroundColor: backgroundColor }}>
      <div
        className="logo"
        onClick={() => {
          if (isMobile) {
            setIsMenuOpen(!isMenuOpen);
          } else {
            navigate("/");
          }
        }}
      >
        <img src={logo} alt="Logo" />
        <span style={{ color: textColor }}>Chicago Neighborhood Soccer</span>
      </div>
      {!isMobile || isMenuOpen ? (
        <>
          <NavButton link="/about" text="About Us" />
          <NavButton link="/events" text="Events" />
          <NavButton link="/faq" text="Frequently Asked Questions" />
        </>
      ) : null}
    </nav>
  );
};

export default NavBar;
