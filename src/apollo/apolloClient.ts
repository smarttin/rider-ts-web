import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {isLoggedIn} from './LocalCache';

const cache = new InMemoryCache({typePolicies: {
  Query: {
    fields: {
      isLoggedIn: {
        read() {
          return isLoggedIn();
        },
      },
    },
  },
},});

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('jwt');
  return {
    headers: {
      ...headers,
      'X-JWT': token ? `${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;
