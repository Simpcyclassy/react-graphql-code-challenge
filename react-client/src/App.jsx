import React from 'react';
import './index.css';
import logo from './logo.png';
import 'antd/dist/antd.css';
import Users from './users/components/Users';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

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
