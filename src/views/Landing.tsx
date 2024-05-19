import { Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import LandingSection from "../components/LandingSection";
import LandingData from "../content/landing.json";
import { useConstants } from "../context/constants";
import "../styles/Landing.css";
import { EventImages, FamilyImage, images } from "../styles/images";

const Landing = () => {
  const Config = useConstants();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderBottom: "1px solid grey",
            }}
          >
            <Typography
              variant="h2"
              textAlign="center"
              padding={6}
              component="div"
            >
              Hosting pick-up soccer in Chicago for over 10 years.
            </Typography>
          </div>
        </div>
        <LandingSection
          title="Our Story"
          titleLink="/about"
          imageUrl={FamilyImage}
          text={LandingData["story"]}
          imagePos="right"
        />
        <LandingSection
          title="Events"
          titleLink="/events"
          imageData={EventImages}
          text={LandingData["events"]}
          imagePos="left"
        />
        <section>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" padding={3}>
              Our Family
            </Typography>
          </div>
          <ImageGallery
            additionalClass="custom-gallery"
            items={images}
            autoPlay={true}
            showNav={false}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            slideInterval={4000}
          />
        </section>
      </div>
    </div>
  );
};

export default Landing;
