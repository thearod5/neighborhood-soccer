import EventData from "../content/events.json";
import "../styles/Events.css";
import { chicagoBlue } from "../styles/constants";

const EventsPage = () => {
  const events = EventData["events"];
  return (
    <div style={{ color: "white", display: "flex", flexDirection: "column" }}>
      {events.map((e) => (
        <div
          key={e["name"]}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px"
          }}
        >
          <a href={e["link"]} style={{ color: "white" }}>
            <h1>{e["name"]}</h1>
          </a>

          <div style={{ color: chicagoBlue }}>{e["location"]}</div>
          <div>{e["description"]}</div>
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
