import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import cache from './utils/cache';
import App from './containers/App';
import './styles/index.scss';

const client = new ApolloClient({
  cache,
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
