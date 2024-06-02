import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavData from "../content/nav.json";
import "../styles/MobileMenu.css";
interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      transitionDuration={500}
      sx={{
        "& .MuiDrawer-paper": {
          width: "40vw", // Set the width to 75% of the viewport width
        },
      }}
    >
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <IconButton onClick={onClose}>
            <CloseIcon color="secondary" />
          </IconButton>
        </div>

        <div className="mobile-menu-content">
          {NavData["pages"].map((link) => (
            <MenuItem
              key={link["link"]}
              onClick={() => {
                navigate(link["link"]);
                onClose();
              }}
              style={{
                padding: 0,
              }}
            >
              <Typography variant="h5" color="secondary" sx={{ flexGrow: 1 }}>
                {link["title"]}
              </Typography>
              <ArrowForwardIos color="secondary" />
            </MenuItem>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default MobileMenu;
