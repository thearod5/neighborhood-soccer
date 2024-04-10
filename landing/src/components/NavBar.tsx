import { AppBar, Toolbar, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../res/logo-light.png";
import "../styles/NavBar.css";

const links = [
  { link: "/", title: "Home" },
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
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppBar position="fixed">
      <Toolbar style={{ display: "flex", justifyContent: "space-around" }}>
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
          <Typography variant="h4">Chicago Neighborhood Soccer</Typography>
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
                  className="nav-link"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(link["link"]);
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    fontSize: 18,
                    padding: "10px",
                  }}
                >
                  {link["title"]}
                </div>
              );
            })}
          </div>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
