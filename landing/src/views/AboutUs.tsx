import { useState } from "react";
import AboutData from "../content/about.json";

const AboutUs = () => {
  const paragraphs = AboutData["paragraphs"];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const pageWidth = isMobile ? "100%" : "60%";

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <h1>About Us</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ width: pageWidth }}>
          {paragraphs.map((p, i) => {
            return (
              <p key={i} style={{ fontSize: 18 }}>
                {p}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
