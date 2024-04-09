import { useTheme } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/LandingSection.css";

interface Props {
  title: string;
  titleLink: string;
  imageUrl: string;
  text: string;
  imagePos: "left" | "right";
}

const LandingSection: React.FC<Props> = ({
  title,
  titleLink,
  imageUrl,
  text,
  imagePos,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <div
      className="contentContainer"
      style={{
        display: "flex",
        flexDirection: imagePos === "right" ? "row-reverse" : "row",
        alignItems: "center",
        margin: 20,
      }}
    >
      <div style={{ flex: 2, height: "100%", padding: 10 }}>
        <img
          src={imageUrl}
          alt="Dynamic"
          style={{
            padding: 0,
            margin: 0,
            borderRadius: 20,
            width: "100%",
            height: "100%",
          }}
          onClick={() => navigate(titleLink)}
        />
      </div>
      <div
        style={{
          flex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <NavLink to={titleLink} style={{ color: theme.palette.text.primary }}>
          <h1>{title}</h1>
        </NavLink>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default LandingSection;
