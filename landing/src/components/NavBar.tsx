import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../res/logo-transparent.png";
import "../styles/NavBar.css";
import { backgroundColor, textColor } from "../styles/constants";
const links = [
  {
    link: "/about",
    title: "About Us",
  },
  {
    link: "/events",
    title: "Events",
  },
  {
    link: "/faq",
    title: "FAQs",
  },
];
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
            setIsMenuOpen(false);
          }
        }}
      >
        <img src={logo} alt="Logo" />
        <span style={{ color: textColor, fontSize: isMenuOpen ? 0 : 24 }}>
          Chicago Neighborhood Soccer
        </span>
      </div>
      {!isMobile || isMenuOpen ? (
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            top: 60,
          }}
        >
          {links.map((link) => {
            return (
              <div
                key={link["link"]}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate(link["link"]);
                }}
                style={{ fontSize: 18, padding: "10px" }}
              >
                {link["title"]}
              </div>
            );
          })}
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
