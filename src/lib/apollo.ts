import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oy8f3k1bzt01yw88560c6d/master',
  cache: new InMemoryCache()
});