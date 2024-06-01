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
      sx={{
        width: "75%",
      }}
    >
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <IconButton onClick={onClose}>
            <CloseIcon />
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
            >
              <Typography variant="body1">{link["title"]}</Typography>
            </MenuItem>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default MobileMenu;
