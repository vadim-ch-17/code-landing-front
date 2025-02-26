import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://backend-strapi-production-307f.up.railway.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
