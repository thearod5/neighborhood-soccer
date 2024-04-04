import EventData from "../content/events.json";
import "../styles/Events.css";
import { chicagoRed } from "../styles/constants";

const EventsPage = () => {
  const events = EventData["events"];
  return (
    <div style={{ color: "white", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <h1>Events</h1>
      </div>
      {events.map((e, i) => (
        <div
          key={e["name"]}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <a href={e["link"]} style={{ color: "white" }}>
            <h2>{e["name"]}</h2>
          </a>

          <div style={{ color: chicagoRed }}>{e["location"]}</div>
          <div>{e["description"]}</div>
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
