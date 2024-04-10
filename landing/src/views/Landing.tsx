import { Typography } from "@mui/material";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import LandingSection from "../components/LandingSection";
import "../styles/Landing.css";
const FamilyImage = "https://pbs.twimg.com/media/Dm_POWdXcAEEO8C.jpg";
const DefaultImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSduh_JOy3ttfTMMrciqOfpgqKYzh8SS2DN4xNf6X2Xg&s";
const images = [
  {
    original: "https://pbs.twimg.com/media/Dm_POWdXcAEEO8C.jpg",
    thumbnail: "https://pbs.twimg.com/media/Dm_POWdXcAEEO8C.jpg",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Landing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  return (
    <div style={{ width: "100%", height: "100%" }}>
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
        text="For more than 10 years, this club has been organizing soccer meetups
        and tournaments in the West Loop and Chicago South Side. We, your
        hosts Andre, Diego, Jordan and Julian are happy that you found us, and
        we aim to provide the best outdoors soccer pick up experience."
        imagePos="right"
      />
      <LandingSection
        title="Events"
        titleLink="/events"
        imageUrl={DefaultImage}
        text="Whether you're a seasoned player or just looking to kick the ball
        around with some new friends, we've got you covered. Dive into the
        action with co-ed futsal and soccer pick-up games, where you can
        showcase your moves or learn a few new ones. With a minimal fee for
        some events, your contribution goes straight into enhancing our
        meetups. It's not just about the game; it's about community, growth,
        and making unforgettable moments along the way."
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
          slideInterval={2000}
        />
      </section>
    </div>
  );
};

export default Landing;
