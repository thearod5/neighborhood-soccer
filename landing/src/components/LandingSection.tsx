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
  const textColor = "white";
  const navigate = useNavigate();
  return (
    <div
      className="contentContainer"
      style={{
        display: "flex",
        flexDirection: imagePos === "right" ? "row-reverse" : "row",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div style={{ flex: 2 }}>
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
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <NavLink
          to={titleLink}
          className={({ isActive }) => (isActive ? "activeNavLink" : "navLink")}
        >
          <h1 style={{ color: textColor }}>{title}</h1>
        </NavLink>
        <p style={{ color: textColor }}>{text}</p>
      </div>
    </div>
  );
};

export default LandingSection;
