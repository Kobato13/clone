import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import styled from 'styled-components';

function Home() {
  return (
    <Router>
      <Header />
    </Router>
  )
};

<<<<<<< HEAD
export default Home;
=======
export default Home;

const Body = styled.div`
  display: flex;
  height: 100vh;
`;
>>>>>>> master
