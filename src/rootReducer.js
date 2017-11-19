// @flow

import { combineReducers } from 'redux';

import logicNodes from './nestableFilter/reducer';

export default combineReducers({
  logicNodes,
})