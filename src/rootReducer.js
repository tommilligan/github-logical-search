// @flow

import { combineReducers } from 'redux';

import logicNodes from './nestableFilter/reducer';
import issues from './issueList/reducer';

export default combineReducers({
  logicNodes,
  issues
})