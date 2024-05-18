import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MeetupEvent, getEvents } from "../api/event";
import EventCard from "../components/EventCard";
import { useConstants } from "../context/constants";

const EventsPage = () => {
  const constants = useConstants();
  const [events, setEvents] = useState<MeetupEvent[]>([]);
  const isMobile = constants.isMobile;

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

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
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {events.map((e) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <EventCard key={e["id"]} event={e} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
