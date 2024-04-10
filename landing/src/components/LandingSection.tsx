import { Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/LandingSection.css";
import { chicagoBlue, chicagoRed } from "../styles/constants";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const textAlign = isMobile ? "center" : "left";
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="contentContainer"
      style={{
        display: "flex",
        flexDirection: imagePos === "right" ? "row-reverse" : "row",
        alignItems: "center",
        borderColor: imagePos === "right" ? chicagoRed : chicagoBlue,
        borderBottom: "1px solid grey",
        padding: 30,
      }}
    >
      <div style={{ flex: 1, height: "100%", padding: 10 }}>
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
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: 10,
        }}
      >
        <NavLink to={titleLink} style={{ textDecoration: "none" }}>
          <Typography variant="h1" textAlign="center" padding={3}>
            {title}
          </Typography>
        </NavLink>
        <Typography variant="body1" textAlign={textAlign}>
          {text}
        </Typography>
      </div>
    </div>
  );
};

export default LandingSection;
