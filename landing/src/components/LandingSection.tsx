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
    <div>
      <NavLink
        to={titleLink}
        className={({ isActive }) => (isActive ? "activeNavLink" : "navLink")}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: textColor }}>{title}</h1>
        </div>
      </NavLink>
      <div
        className="contentContainer"
        style={{
          display: "flex",
          flexDirection: imagePos === "right" ? "row-reverse" : "row",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 2 }}>
          <img
            src={imageUrl}
            alt="Dynamic"
            style={{
              padding: 0,
              margin: 0,
              width: "100%",
              height: "100%",
            }}
            onClick={() => navigate(titleLink)}
          />
        </div>
        <div style={{ flex: 3 }}>
          <p style={{ padding: 10, color: textColor }}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
