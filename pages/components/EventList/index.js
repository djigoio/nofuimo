import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";
import EventsList from "./EventList";

const GET_ALL_EVENTS = gql`
  {
    events {
      id
      title
      description
      event_time
      header_image {
        url
      }
    }
  }
`;


const EventsListQuery = () => {
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return (
      <EventsList events={data.events} />
    );
};

export default EventsListQuery;
