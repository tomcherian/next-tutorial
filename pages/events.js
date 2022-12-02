import { useState } from "react";
import { useRouter } from "next/router";

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvent = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvent}> Sports events</button>
      <h2>List of Events</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h4>
            {event.title} {event.category}
          </h4>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
