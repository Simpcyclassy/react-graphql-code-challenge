import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'antd/dist/antd.css';
import React from 'react';
import './index.css';
import logo from './logo.png';
import { Users } from './users/components/Users';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="astronomer-logo">
        <img src={logo}/>
      </div>
      <Users />
    </ApolloProvider>
  )
};

export default App;
