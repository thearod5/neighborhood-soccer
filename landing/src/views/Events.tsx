import { Typography } from "@mui/material";
import EventCard from "../components/EventCard";
import EventData from "../content/events.json";
import { useConstants } from "../context/constants";

const EventsPage = () => {
  const constants = useConstants();
  const events = EventData["events"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          flexDirection: constants.isMobile ? "column" : "row",
        }}
      >
        {events.map((e, i) => (
          <EventCard
            key={e["name"]}
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
