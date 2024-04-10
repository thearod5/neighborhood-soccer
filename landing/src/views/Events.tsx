import { Typography } from "@mui/material";
import { useState } from "react";
import EventCard from "../components/EventCard";
import EventData from "../content/events.json";

const EventsPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const events = EventData["events"];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" padding={3}>
          Events
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {events.map((e, i) => (
          <EventCard
            name={e["name"]}
            link={e["link"]}
            location={e["location"]}
            description={e["description"]}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
