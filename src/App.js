// @flow

import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import AppHeader from './header';
import NestableFilter from './nestableFilter';

const App = props => (
  <div className="App">
    <AppHeader />
    <NestableFilter id={0} />
  </div>
)

export default connect(
  null, 
  null
)(App);
