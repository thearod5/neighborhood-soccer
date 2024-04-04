import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { NavLink } from "react-router-dom";
import LandingSection from "../components/LandingSection";
import "../styles/Landing.css";
const DefaultImage = "https://picsum.photos/id/1018/1000/600/";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
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
  return (
    <div className="landingContainer">
      <section>
        <ImageGallery
          items={images}
          autoPlay={true}
          showNav={false}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          slideInterval={2000}
        />
      </section>
      <LandingSection
        title={
          <NavLink
            to="/about"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            <h1>About Us</h1>
          </NavLink>
        }
        imageUrl={DefaultImage}
        text="For more than 10 years, this club has been organizing soccer meetups
        and tournaments in the West Loop and Chicago South Side. We, your
        hosts Andre, Diego, Jordan and Julian are happy that you found us, and
        we aim to provide the best outdoors soccer pick up experience."
        imagePos="right"
      />
      <LandingSection
        title={
          <NavLink
            to="/events"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            <h1>Events</h1>
          </NavLink>
        }
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
    </div>
  );
};

export default Landing;
