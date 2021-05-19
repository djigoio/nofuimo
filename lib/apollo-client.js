import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    //uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default client;