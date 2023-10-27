import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";

export default function EventDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  });

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  const onDeleteHandler = () => {
    mutate({ id: params.id });
  };

  let content;

  if (isLoading) {
    content = (
      <div id="event-details-content" className="center">
        <p>Events detail is loading...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <p>Error when loading event detail</p>
      </div>
    );
  }

  if (data) {
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={onDeleteHandler}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {data.date} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
