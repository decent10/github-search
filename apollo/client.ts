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
  return {
    headers: {
      ...headers,
      authorization: 'Bearer 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'
     // authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`
    }
  }
});

export const  client = new ApolloClient({
   link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
