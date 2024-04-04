import EventData from "../content/events.json";
import "../styles/Events.css";

const EventsPage = () => {
  const events = EventData["events"];
  return (
    <div>
      {events.map((e) => (
        <div key={e["name"]}>
          <div>{e["name"]}</div>
          <div>{e["link"]}</div>
          <div>{e["location"]}</div>
          <div>{e["description"]}</div>
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
