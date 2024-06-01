import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import NavData from "../content/nav.json";
import { useConstants } from "../context/constants";
import logo from "../res/logo-star.png";
import "../styles/NavBar.css";

const NavBar = () => {
  const constants = useConstants();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: "linear-gradient(to left, #6ad5fc, #ade5f7)",
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
                handleMenuClose();
                navigate("/");
              } else {
                navigate("/");
              }
            }}
          >
            <img src={logo} alt="Logo" />
            {constants.isMobile ? (
              <Typography variant="h2" style={{ fontSize: 18 }}>
                Chicago NBHD Soccer
              </Typography>
            ) : null}
          </div>
          {constants.isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <MobileMenu open={menuOpen} onClose={handleMenuClose} />
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              {NavData["pages"].map((link) => (
                <div
                  key={link["link"]}
                  className="nav-link"
                  onClick={() => navigate(link["link"])}
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
              ))}
            </div>
          )}
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default NavBar;
