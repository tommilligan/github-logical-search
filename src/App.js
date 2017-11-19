// @flow

import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import AppHeader from './header';
import OperatorSelection from './operatorSelection';

const App = props => (
  <div className="App">
    <AppHeader />
    <OperatorSelection />
  </div>
)

export default connect(
  null, 
  null
)(App);
