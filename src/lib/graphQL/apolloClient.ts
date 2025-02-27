import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://backend-strapi-production-307f.up.railway.app/graphql",
  cache,
});

export default client;
