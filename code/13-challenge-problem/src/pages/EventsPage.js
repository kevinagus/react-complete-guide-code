import { Link } from "react-router-dom";

const EVENTS = [
  { id: 1, title: "evento 1", description: "boo 1" },
  { id: 2, title: "evento 2", description: "boo 2" },
  { id: 3, title: "evento 3", description: "boo 3" },
];

function EventsPage() {
  return (
    <>
      <h1>This is Event Page</h1>
      {EVENTS.map((event) => (
        <div>
          <Link to={`/events/${event.id}`}>
            <h2>{event.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}

export default EventsPage;
