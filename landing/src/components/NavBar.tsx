import { AppBar, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavData from "../content/nav.json";
import { useConstants } from "../context/constants";
import logo from "../res/logo-light.png";
import "../styles/NavBar.css";

const NavBar = () => {
  const constants = useConstants();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: "linear-gradient(to left, #6ad5fc, #bee9f7)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: constants.maxWidth,
          }}
        >
          <div
            className="logo"
            onClick={() => {
              if (constants.isMobile) {
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
          {!constants.isMobile || isMenuOpen ? (
            <div
              style={{
                display: "flex",
                flexDirection: constants.isMobile ? "column" : "row",
                justifyContent: "space-around",
                top: 60,
              }}
            >
              {NavData["pages"].map((link) => {
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
      </div>
    </AppBar>
  );
};

export default NavBar;
