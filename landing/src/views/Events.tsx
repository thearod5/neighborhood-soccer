import { useState } from "react";
import EventCard from "../components/EventCard";
import EventData from "../content/events.json";
import "../styles/Events.css";

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
        <h1>Events</h1>
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
            location={e["location"]}
            description={e["description"]}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
