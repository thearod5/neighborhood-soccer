import { Typography } from "@mui/material";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useConstants } from "../context/constants";
import { chicagoBlue, chicagoRed } from "../styles/constants";
import "../styles/LandingSection.css";

function toImages(imageData: string[]) {
  return imageData.map((i) => {
    return {
      original: i,
      thumbnail: i,
    };
  });
}
interface Props {
  title: string;
  titleLink: string;
  text: string;
  imagePos: "left" | "right";
  imageUrl?: string;
  imageData?: string[];
}

const LandingSection: React.FC<Props> = ({
  title,
  titleLink,
  imageUrl,
  text,
  imagePos,
  imageData,
}) => {
  const navigate = useNavigate();
  const constants = useConstants();
  const textAlign = constants.isMobile ? "center" : "left";

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
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {imageData !== undefined ? (
          <ImageGallery
            additionalClass="custom-gallery"
            items={toImages(imageData)}
            autoPlay={true}
            showNav={false}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            slideInterval={5000}
          />
        ) : (
          <img
            src={imageUrl}
            alt="Dynamic"
            style={{
              padding: 0,
              margin: 0,
              borderRadius: 20,
              width: "100%",
              maxHeight: "auto",
            }}
            onClick={() => navigate(titleLink)}
          />
        )}
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
          padding: 10,
        }}
      >
        <NavLink to={titleLink} style={{ textDecoration: "none" }}>
          <Typography
            variant="h1"
            textAlign="center"
            style={{ marginBottom: 25 }}
          >
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
