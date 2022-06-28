import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
console.log(process.env.GITHUB_ACCESS_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: `Bearer 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` 
    }
  }
});

export const  client = new ApolloClient({
   link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
