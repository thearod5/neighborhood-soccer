import { Typography } from "@mui/material";
import AboutData from "../content/about.json";
import { useConstants } from "../context/constants";

const AboutUs = () => {
  const paragraphs = AboutData["paragraphs"];
  const constants = useConstants();
  const pageWidth = constants.isMobile ? "100%" : "60%";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" padding={1} textAlign="center">
            About Us
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography style={{ width: pageWidth }} variant="body1">
            {paragraphs.map((p, i) => {
              return (
                <p key={i} style={{ fontSize: 18 }}>
                  {p}
                </p>
              );
            })}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
