import React from "react";

interface Props {
  title: React.ReactNode;
  imageUrl: string;
  text: string;
  imagePos: "left" | "right";
}

const LandingSection: React.FC<Props> = ({
  title,
  imageUrl,
  text,
  imagePos,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div
        style={{
          display: "flex",
          flexDirection: imagePos === "right" ? "row-reverse" : "row",
          alignItems: "center",
          border: "1px solid red",
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
          />
        </div>
        <div style={{ flex: 3 }}>
          <p style={{ padding: 10 }}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
