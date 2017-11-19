// @flow

import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import AppHeader from './header';
// import LogicalSelection from './logicalSelection';

const App = props => (
  <div className="App">
    <AppHeader />
  </div>
)

export default connect(
  null, 
  null
)(App);
