// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import './App.css';

import AppHeader from './header';
import NestableFilter from './nestableFilter';

const App = props => (
  <div className="App">
    <AppHeader />
    <Container>
      <NestableFilter id='0' />
    </Container>
  </div>
)

export default connect(
  null, 
  null
)(App);
