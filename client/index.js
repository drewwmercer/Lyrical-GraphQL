import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const Root = () => {
  return <div>Lyrical</div>
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
