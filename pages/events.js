import { ApolloProvider } from '@apollo/client'
import EventsListQuery from './components/EventList/index'
import client from "../lib/apollo-client";

function events() {
    return (
        <ApolloProvider client={client}>
            <EventsListQuery/>
        </ApolloProvider>
    )
}

export default events
