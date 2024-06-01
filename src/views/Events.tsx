import { CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getEvents, MeetupEvent } from "../api/event";
import EventCard from "../components/EventCard";

const EventsPage = () => {
  const [events, setEvents] = useState<MeetupEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getEvents()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((e) => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: 100,
        }}
      >
        <CircularProgress color="secondary" />
      </div>
    );
  }

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
