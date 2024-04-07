import AboutData from "../content/about.json";

const AboutUs = () => {
  console.log(AboutData);
  const paragraphs = AboutData["paragraphs"];

  return (
    <div style={{ padding: 20, color: "white" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <h1>About Us</h1>
      </div>
      {paragraphs.map((p, i) => {
        return (
          <p key={i} style={{ fontSize: 18 }}>
            {p}
          </p>
        );
      })}
    </div>
  );
};

export default AboutUs;