import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
});

export default client;

// "http://localhost:1337/graphql"
// "https://communityoneapi.herokuapp.com/graphql"